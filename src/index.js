const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://asdf:Asdf4dM1n666@cluster0-htu8t.gcp.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true, 
});

app.use(require('./routes'));

app.listen(3333);