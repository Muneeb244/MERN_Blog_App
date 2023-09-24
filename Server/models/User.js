const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,  
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    }
})

userSchema.pre('save', async function(){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
})

const validateSignup = (user) => {
    const Schema = joi.object({
        name: joi.string().min(3).max(255).required(),
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(6).max(255).required(),
    })
    return Schema.validate(user);
}

const User = mongoose.model('User', userSchema);

module.exports = { User, validateSignup };