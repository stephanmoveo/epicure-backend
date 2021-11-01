const express = require('express');
const router = express.Router();
const dishController = require('../controllers/DishController')
router.route('/createDish').post(dishController.createDish)
router.route('/readAllDishes').get(dishController.allDishes)
router.route('/updateDish').post(dishController.updateDish)
router.route('/deleteDish/:id').get(dishController.deleteDish)

module.exports = router