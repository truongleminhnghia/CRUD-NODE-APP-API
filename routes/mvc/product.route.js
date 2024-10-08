const express = require('express');
const Product = require('../../models/product.model');
const router = express.Router();

// GET home page
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.render('index', { products });
    } catch (error) {
        res.status(500).send(error);
    }
});

// You can add more MVC routes as needed

module.exports = router;
