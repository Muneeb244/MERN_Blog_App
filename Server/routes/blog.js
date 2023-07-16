const express = require('express');
const router = express.Router();
const { Blog, blogValidation } = require('../models/Blog');
const multer = require('multer');

const FILE_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = FILE_TYPE[file.mimetype];
        let extensionError = new Error("Invalid image type");

        if (isValid) extensionError = null;
        cb(extensionError, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        const extension = FILE_TYPE[file.mimetype]
        const fileName = file.originalname.replace(' ', '-').replace(`.${extension}`, "");
        cb(null, `${fileName}-${Date.now()}.${extension}`)
    }
});

const upload = multer({ storage });



router.get('/', async (req, res) => {
    const blogs = await Blog.find({});
    res.json({blogs});
})

router.post('/post', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const image = req.file?.filename;
    if (!image) return res.status(400).send('No image in the request');
    const imagePath = `${req.protocol}://${req.get('host')}/public/uploads/${image}`;

    const { error } = blogValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const blog = new Blog({
        author: req.body.author,
        title: req.body.title,
        summary: req.body.summary,
        image: imagePath,
        description: req.body.description,
        authorId: req.body.authorId
    });
    if (!blog) return res.status(400).json({ error: 'Something went wrong' });

    blog.save()
        .then(blog => {res.json({ blog })})
        .catch(error => {console.log(error);res.status(400).json({ error })})
});


module.exports = router;