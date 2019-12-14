const express = require('express');

const router = express.Router();

const { login, register, setup, checkout, checkin } = require('../controllers/shop.controller');

router.post('/login', login);

router.post('/register', register);

router.post('/setup', setup);

router.post('/checkout', checkout);

router.post('/checkin', checkin);

module.exports = router;