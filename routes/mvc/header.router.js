const express = require('express');
const router = express.Router();
const headerController = require('../../controllers/mvc/headerController');
/**
 * GET /
 * 
 */

router.get('/questions', headerController.questionpage);
router.get('/quizzs', headerController.quizzpage);



module.exports = router;