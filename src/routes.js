const multer = require('multer');
const uploadConfig = require('./config/upload');
const { getPosts, createPost } = require('./controllers/post-controller');
const { likePost } = require('./controllers/like-controller');

const upload = multer(uploadConfig);
const router = (instance, opts, next) => {
instance.get('/post', getPosts);
//instance.post('/post', upload.single('image'), createPost);
instance.post('/post/:id/like', likePost);

next();
};

module.exports = router;
