const multer = require('fastify-multer');
const uploadConfig = require('./config/upload');
const { getPosts, createPost } = require('./controllers/post-controller');
const { likePost } = require('./controllers/like-controller');

const upload = multer(uploadConfig);

const router = (instance, opts, next) => {
  instance.register(multer.contentParser);
  
  instance.get('/post', getPosts);
  instance.route({
    method: 'POST',
    url: '/post',
    preHandler: upload.single('image'),
    handler: createPost
  });
  instance.post('/post/:id/like', likePost);
  
  next();
};

module.exports = router;
