const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path')
cors = require('cors'),
    config = require('./config');

const app = express();

//routes

//setup cors
app.use(cors());

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route handlers

// Server
app.listen(config.PATH, () => {
    console.log(`listening on port ${config.PATH}`);
})