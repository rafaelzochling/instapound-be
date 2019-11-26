const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = require('fastify')({ logger: true });

// const server = require('http').Server(app);
// const io = require('@guivic/fastify-socket.io')(server);

mongoose.connect('mongodb+srv://asdf:Asdf4dM1n666@cluster0-htu8t.gcp.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true, 
});

// app.register((req, res, next) => {
//   req.io = io;
// 
//   next();
// })

app.use(cors()); 

app.register(require('fastify-static'), {
  root: path.resolve(__dirname, '..', 'uploads', 'resized'),
  prefix: '/files/'
});

app.register(require('./routes'));

app.log.info(`server listening on 3333`);

app.listen(3333);