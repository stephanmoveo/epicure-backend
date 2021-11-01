const express = require('express');
const router = express.Router();
const dishController = require('../controllers/DishController')
router.route('/createDish').post(dishController.createDish)

module.exports = router