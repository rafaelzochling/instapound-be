const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const { getPosts, createPost } = require('./controllers/post-controller');
const { likePost } = require('./controllers/like-controller');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/post', getPosts);
routes.post('/post', upload.single('image'), createPost);
routes.post('/post/:id/like', likePost); 

module.exports = routes;
