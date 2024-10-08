const express = require('express');
const router = express.Router();
const mainController = require('../../controllers/mvc/productcontroller');

/**
 * GET /
 * HomePage
 * 
 */

router.get('/', mainController.homepage);
router.get('/add', mainController.addProduct);
router.post('/add', mainController.postProduct);

module.exports = router;
