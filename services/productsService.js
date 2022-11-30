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

const editProduct = async (id, newProduct) => {
    return await productsRepository.editProduct(id, newProduct);
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.editProduct = editProduct;