const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// GET all
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err) {
        res.json({ message: err })
    }

});

//SUBMIT post
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    post.save()
    .then(data => {
        res.json(data);
    })

    .catch(err => {
        res.json({ message: err })
    })
});

//GET specific 

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID)
        res.json(post)
    }

    catch (err) {
        res.json({ message: err })
    }
} )

//DELETE specific 

router.delete('/:postId', async (req, res) => {
    try {
        const post = await Post.remove({ _id: req.params.postId });
        res.json(post)
    }

    catch (err) {
        res.json({ message: err })
    }
})

//UPDATE post

router.patch('/:postId', async (req, res) => {
    try {
        const post = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title }});
        res.json(post)
    }

    catch (err) {
        res.json({ message: err })
    }
})

module.exports = router  