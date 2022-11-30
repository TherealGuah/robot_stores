const dbService  = require('../services/dbService');

let allProductsCollection = null;
dbService.connectToMongoDB()
    .then((db) => allProductsCollection = db.collection('products'));

const getAllProducts = async () => {
    return await allProductsCollection.find({}).toArray();
};

module.exports.getAllProducts = getAllProducts;