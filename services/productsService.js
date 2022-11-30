const productsRepository = require('../repositories/productsRepository');

const getAllProducts = async () => {
    return await productsRepository.getAllProducts();
};

module.exports.getAllProducts = getAllProducts;