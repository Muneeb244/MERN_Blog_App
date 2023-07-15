const express = require('express');
const router = express.Router();
const { User, validateSignup } = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    const user = await User.find({});
    res.json(user);
});

router.get('/profile', async (req, res) => {
    const {token} = req.body;
    if(!token) return res.json({error: 'No token provided'})
    const decoded = jwt.verify(token, process.env.jwtSecret);
    if(!decoded) return res.json({error: 'Invalid token'})
    
    const user = User.findById(decoded.id).select('-password');
    if(!user) return res.json({error: 'User not found'})
    console.log(user)
    res.json({user});
})

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const { error } = validateSignup(req.body);
    if (error) return res.json({ error: error.details[0].message })

    const duplicate = await User.findOne({ email });
    if (duplicate) return res.json({ error: 'User already exists' })

    let user = new User({
        name, email, password
    });

    user.save()
        .then(user => {
            const token = jwt.sign({ id: user._id }, process.env.jwtSecret, { expiresIn: 3600 })
            res.json({token: token});
        }).catch(err => res.json({ error: err }));

});



router.post('/signin', async (req, res) => {
    const { email, password } = req.body;


    let user = await User.findOne({ email });
    if (!user) return res.json({ error: 'Invalid email/password' })

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.json({ error: 'Invalid email/password' })

    const token = jwt.sign({id: user.id, name: user.name}, process.env.jwtSecret, { expiresIn: 3600 })
    res.json({token});

})

module.exports = router;