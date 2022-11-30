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

const deleteProduct = async (id) => {
    return await productsRepository.deleteProduct(id);
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;