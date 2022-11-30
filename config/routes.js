const productsController = require('../controllers/productsController');

const routes = (app) => {
    app.get('/products', productsController.getAllProducts);
};

module.exports = routes;