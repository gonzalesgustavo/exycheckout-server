const express = require('express');

const router = express.Router();

const {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products.controller');


router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/add-product', addProduct);

router.patch('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

module.exports = router;