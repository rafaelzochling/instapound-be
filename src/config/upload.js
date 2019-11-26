const multer = require('fastify-multer');
const path = require('path');

const uploadConfig = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
};

module.exports = uploadConfig;

