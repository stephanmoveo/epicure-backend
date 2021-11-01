const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/RestaurantController')

router.route('/createRestaurant').post(restaurantController.createRestaurant)
router.route('/allRestaurants').get(restaurantController.allRestaurants)

module.exports = router

