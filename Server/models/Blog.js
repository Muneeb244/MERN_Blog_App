const mongoose = require('mongoose');
const joi = require('joi');

const blogSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    summary: {
        type: "String",
        required: true,
    },
    image: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const blogValidation = (blog) => {
    const schema = joi.object({
        title: joi.string().required().min(3),
        summary: joi.string().required().min(10),
        description: joi.string().required().min(50),
    })
    return schema.validate(blog);
}

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {
    Blog,
    blogValidation
}