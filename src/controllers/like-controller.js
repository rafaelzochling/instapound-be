const Post = require('../model/Post');

const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  
  req.io.emit('like', post);
  
  return res.json(post);
};

module.exports = { likePost };
