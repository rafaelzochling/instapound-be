const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://asdf:Asdf4dM1n666@cluster0-htu8t.gcp.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true, 
});

app.use((req, res, next) => {
  req.io = io;

  next();
})

app.use(cors()); 

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'));

console.info('Server Running on Port 3333');
server.listen(3333);