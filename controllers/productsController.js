const productsService  = require('../services/productsService');

const getAllProducts = (req, res) => {
    productsService.getAllProducts()
        .then( allProducts => res.json(allProducts));
};

const getProduct = (req, res) => {
    let id  = parseInt(req.params.id);
    productsService.getProduct(id)
        .then( product => res.json(product));
};

const addProduct = (req, res) => {
    let newProduct  = req.body;
    productsService.addProduct(newProduct)
        .then( newProduct => res.json(newProduct));
};

const deleteProduct = (req, res) => {
    let id  = parseInt(req.params.id);
    productsService.getProduct(id)
        .then( product => res.json(product));
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;