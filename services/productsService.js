const productsRepository = require('../repositories/productsRepository');

const getAllProducts = async () => {
    return await productsRepository.getAllProducts();
};

const getProduct = async (id) => {
    return await productsRepository.getProduct(id);
};

const addProduct = async (newProduct) => {
    return await productsRepository.addProduct(newProduct);
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;