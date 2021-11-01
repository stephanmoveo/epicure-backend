const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/RestaurantController')

router.route('/createRestaurant').post(restaurantController.createRestaurant)
router.route('/allRestaurants').get(restaurantController.allRestaurants)
// router.route('/id').get(restaurantController.createRestaurant)
// router.route('/create').post(restaurantController.allRestaurants)
// router.route('/update').post(restaurantController.allRestaurants)
// router.route('/delete').post(restaurantController.allRestaurants)
module.exports = router

