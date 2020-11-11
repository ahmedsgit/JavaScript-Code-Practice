const route = require('express');
const router = require('./user');
const {
  getAllPosts,
  getSinglePost,
  createNewPost,
  updateNewPost,
  deleteNewPost,
} = require('./postControler');
// GET Method
router.get('/', getAllPosts);

router.get('/:postId', getSinglePost);

// POST Method
router.post('/', createNewPost);

router.put('/:postId', updateNewPost);

router.delete('/:postId', deleteNewPost);

module.exports = router;
