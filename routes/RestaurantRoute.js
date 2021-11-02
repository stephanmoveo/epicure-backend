const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/RestaurantController')

router.route('/createRestaurant').post(restaurantController.createRestaurant)
router.route('/readAllRestaurants').get(restaurantController.allRestaurants)
router.route('/updateRestaurant').post(restaurantController.updateRestaurant)
router.route('/deleteRestaurant/:id').get(restaurantController.deleteRestaurant)
router.route('/findRestWithDishes/:id').get(restaurantController.findRestWithDishes)

module.exports = router

