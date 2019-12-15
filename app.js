const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    cors = require('cors'),
    config = require('./config');

const app = express();

//routes
const shopRoute = require('./routes/shop');
const productRoute = require('./routes/products');
const userRoute = require('./routes/User');

//setup cors
app.use(cors());

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route handlers
app.use(config.baseURLStr, userRoute);
app.use(`${config.baseURLStr}/shop`, shopRoute);
app.use(`${config.baseURLStr}/products`, productRoute);

// Server
app.listen(config.PORT, () => {
    console.log(`listening on port ${config.PORT}`);
})