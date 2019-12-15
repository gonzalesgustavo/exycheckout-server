const express = require('express');

const router = express.Router();

const { setup, checkout, checkin, confirm, closeShop, updateShop } = require('../controllers/shop.controller');

router.post('/setup', setup);

// router.delete('/remove/:id', closeShop);

// router.patch('/update:id', updateShop);

// router.post('/checkout', checkout);

// router.post('/checkin', checkin);

// router.post('/return', confirm);


module.exports = router;