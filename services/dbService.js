const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:password@localhost:27017';
const client = new MongoClient(url);
const dbName = 'robot_stores';

const connectToMongoDB = async () => {
    await client.connect();
    return client.db(dbName);
};

module.exports.connectToMongoDB = connectToMongoDB;