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

module.exports.getAllProducts = getAllProducts;
module.exports.getProduct = getProduct;
