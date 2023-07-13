const express = require('express');
const router = express.Router();
const { User, validateSignup } = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const { error } = validateSignup(req.body);
    if (error) return res.json({ message: error.details[0].message })

    const duplicate = user.findOne({ email });
    if (duplicate) return res.json({ message: 'User already exists' })

    let user = new User({
        name, email, password
    });

    user.save()
        .then(user => {
            const token = jwt.sign({ id: user._id }, process.env.jwtSecret, { expiresIn: 3600 })
            res.json(token);
        }).catch(err => res.json({ message: err }));

});



router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const { error } = validateSignup(req.body);
    if (error) res.json({ message: error.details[0].message })

    let user = await User.findOne({ email });
    if (!user) return res.json({ message: 'Invalid email/password' })

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.json({ message: 'Invalid email/password' })

    const token = jwt.sign({id: user.id, name: user.name}, process.env.jwtSecret, { expiresIn: 3600 })
    res.json(token);

})

module.exports = router;