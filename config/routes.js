const productsController = require('../controllers/productsController');

const routes = (app) => {
    app.get('/products', productsController.getAllProducts);
    //get single products
    app.get('/products/:id', productsController.getProduct);
    //post single product
    app.post('/products', productsController.addProduct);
    // delete product
    app.delete('/products/:id', productsController.deleteProduct);
};

module.exports = routes;