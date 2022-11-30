const productsController = require('../controllers/productsController');

const routes = (app) => {
    app.get('/products', productsController.getAllProducts);
    //get single products
    app.get('/products/:id', productsController.getProduct);
    //post single product
    app.post('/products', productsController.addProduct);
};

module.exports = routes;