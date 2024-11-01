const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// Define blog routes
router.get('/', blogController.getAllPosts);
router.post('/', blogController.createPost);
router.get('/:id', blogController.getPostById);
router.put('/:id', blogController.updatePost);
router.delete('/:id', blogController.deletePost);

module.exports = router;

