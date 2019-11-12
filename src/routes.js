import express from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import PostController from './controllers/PostController';
import LikeController from './controllers/LikeController';

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/post', PostController.index);
routes.post('/post', upload.single('image'), PostController.store);
routes.post('/post/:id/like', LikeController.store);

module.exports = routes;
