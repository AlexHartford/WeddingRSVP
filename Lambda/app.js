// app.js

const bodyParser = require('body-parser');
const sls = require('serverless-http');
const card = require('./routes/card.route');

const express = require('express');
const app = express()

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = '';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/cards', card);

// app.listen(port, () => {
//   console.log('Server is up and running on port number ' + port);
// });

module.exports.server = sls(app)