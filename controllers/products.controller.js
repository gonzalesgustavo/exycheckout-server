const getProducts = (req, res, next) => {
    res.status(200).end('get products')
};

const getProduct = (req, res, next) => {
    res.status(200).end('get product')
};

const addProduct = (req, res, next) => {
    res.status(200).end('add product')
};

const updateProduct = (req, res, next) => {
    res.status(200).end('update product')
};

const deleteProduct = (req, res, next) => {
    res.status(200).end('delete product')
};

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}