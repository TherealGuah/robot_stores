const productsRepository = require('../repositories/productsRepository');

const getAllProducts = async () => {
    return await productsRepository.getAllProducts();
};

const getProduct = async (id) => {
    return await productsRepository.getProduct(id);
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;