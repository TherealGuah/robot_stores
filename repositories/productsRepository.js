const dbService  = require('../services/dbService');

let dbRequest = null;
dbService.connectToMongoDB()
    .then( (db) => dbRequest = db.collection('products'));

const getAllProducts = async () => {
    return await dbRequest.find({}).toArray();
};

const getProduct = async (id) => {
    return await dbRequest.find({"id": id}).toArray();
};

const addProduct = async (newProduct) => {
    return await dbRequest.insertOne(newProduct);
};

const deleteProduct = async (id) => {
    return await dbRequest.deleteOne({"id": id});
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;
module.exports.deleteProduct = deleteProduct;
