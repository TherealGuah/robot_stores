const productsService  = require('../services/productsService');

const getAllProducts = (req, res) => {
    productsService.getAllProducts()
        .then( allProducts => res.json(allProducts));
};

module.exports.getAllProducts = getAllProducts;