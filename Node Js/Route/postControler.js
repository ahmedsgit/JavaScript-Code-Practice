exports.getAllPosts = (req, res) => {
  let { category, page, filter } = req.query;
  console.log(req.query);
  res.send('<p>Render all post</p>');
};

exports.getSinglePost = (req, res) => {
  res.send('<p>I am POST = </p>' + req.params.postId);
};

exports.createNewPost = (req, res) => {
  res.send('<p>Create new post</p>');
};

exports.updateNewPost = (req, res) => {
  res.send('<p>Updating Exiting post = </p>' + req.params.postId);
};

exports.deleteNewPost = (req, res) => {
  res.send('<p>deleting Exiting post</p>' + req.params.postId);
};
