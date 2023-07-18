const express = require('express');
const router = express.Router();
const { Blog, blogValidation } = require('../models/Blog');
const multer = require('multer');
const auth = require('../middleware/auth');

const FILE_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("req:",req.body)
        console.log("files:",file)
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
    const blogs = await Blog.find({}).populate('author', '-_id name');
    res.json({blogs});
})

router.post('/post', auth, upload.single('image'), async (req, res) => {
    const image = req.file?.filename;
    if (!image) return res.status(400).send('No image in the request');
    const imagePath = `${req.protocol}://${req.get('host')}/public/uploads/${image}`;

    const { error } = blogValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const blog = new Blog({
        title: req.body.title,
        summary: req.body.summary,
        image: imagePath,
        description: req.body.description,
        author: req.user.id
    });
    if (!blog) return res.status(400).json({ error: 'Something went wrong' });

    blog.save()
        .then(blog => {res.json({ blog })})
        .catch(error => {console.log(error);res.status(400).json({ error })})
});

router.get('/:id', async (req, res) => {
    // console.log(req.params.id)
    const blog = await Blog.findById(req.params.id).populate('author', '_id name');
    if (!blog) return res.status(400).json({ error: 'Something went wrong' });
    res.json({ blog });
});

router.put('/:id',auth, async (req, res) => {
    console.log(req.params.id)

    const blog = await Blog.findById(req.params.id);
    console.log(blog)
    if (!blog) return res.status(400).json({ error: 'Something went wrong' });


})

module.exports = router;