const express = require('express');
const router = express.Router();
const {Blog} = require('../models/Blog');
const auth = require('../middleware/auth');

router.post('/:blogId', auth, async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const userId = req.user.id;

    const blog = await Blog.findById(blogId);
    if(!blog) return res.status(200).json({ error: 'Could not find the blog' });
    if (blog.likedBy?.includes(userId)) {
      return res.status(200).json({ error: 'You already liked this blog.' });
    }
    
    blog.likedBy.push(userId);
    await blog.save();
    return res.status(201).json({ message: 'Blog liked successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:blogId', auth, async (req, res) => {

  try {
    const blogId = req.params.blogId;
    const userId = req.user.id;

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(400).json({ error: 'Could not find the blog' });

    const userIndex = blog.likedBy.indexOf(userId);
    if (userIndex === -1) {
      return res.status(200).json({ error: 'You have not liked this blog.' });
    }

    blog.likedBy.splice(userIndex, 1);
    await blog.save();
    return res.status(200).json({ message: 'Blog unliked successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
