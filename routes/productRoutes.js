const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    deleteAllProducts,
    findByName
} = require('../controllers/productController');

router.get('/products', findByName); // This route must come before the other GET route to avoid conflicts.
router.get('/products/:id', getProductById);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.delete('/products', deleteAllProducts);

module.exports = router;
