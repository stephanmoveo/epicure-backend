const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/RestaurantController')


/**
 * @api {post} restaurants/createRestaurant Create Restaurant.
 * @apiGroup Restaurant
 * @apiName createRestaurant
 * @apiParam {String} name Restaurant name.
 * @apiParam {String} image Restaurant image.
 * @apiParam {String} chefId Restaurant chefId.
 * @apiDescription Creates a new Restaurant in database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/restaurants/createRestaurant
 * @apiUse MustFillFiledsError
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse SuccessResponse
 */


router.route('/createRestaurant').post(restaurantController.createRestaurant)

/**
 * @api {get} restaurants/readAllRestaurants Show All Restaurants .
 * @apiGroup Restaurant
 * @apiName AllRestaurants
 * @apiDescription Gets all Restaurants with its Chef from database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/restaurants/readAllRestaurants
 * @apiError Error 404 Not Found
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse AllRestaurantsSuccessResponse
 */

router.route('/readAllRestaurants').get(restaurantController.allRestaurants)

/**
 * @api {post} restaurants/updateRestaurant Update Restaurant by ID.
 * @apiName updateRestaurant
 * @apiGroup Restaurant
 * @apiDescription Updates a Restaurant in database.
 * @apiParam {String} id Restaurant unique ID.
 * @apiParam {String} name Restaurant name.
 * @apiParam {String} image Restaurant image.
 * @apiParam {String} chefId Restaurant chefId.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/restaurants/updateRestaurant
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse SuccessResponse
 * @apiUse RestaurantNotFoundError
 */

router.route('/updateRestaurant').post(restaurantController.updateRestaurant) 

/**
 * @api {get} restaurants/findRestWithDishes/:id Find Restaurant by ID.
 * @apiGroup Restaurant
 * @apiName find a Restaurant with its Dishes
 * @apiParam {String} id Restaurant unique ID.
 * @apiDescription Finds a Restaurant with its Dishes from database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/restaurants/findRestWithDishes/6181095f0bb6f9c3176d111a
 * @apiUse Admin
 * @apiUse RestaurantNotFoundError
 * @apiUse AllRestaurantsWithDishesSuccessResponse
*/

router.route('/findRestWithDishes/:id').get(restaurantController.findRestWithDishes)

/**
 * @api {get} restaurants/deleteRestaurant/:id Delete Restaurant by ID.
 * @apiGroup Restaurant
 * @apiName DeleteRestaurant
 * @apiDescription Marks a Restaurant Valid Field to False.
 * @apiParam {String} id Restaurant unique ID.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/restaurants/deleteRestaurant/61926c53d97cb9e03f9f6b0e
 * @apiUse Admin
 * @apiUse EpicureHeaderSet
 * @apiUse RestaurantNotFoundError
 * @apiUse SuccessResponse
 */

router.route('/deleteRestaurant/:id').get(restaurantController.deleteRestaurant)

/**
 * @api {get} restaurants/findRestaurantsWithDishes Show All Restaurants with their Dishes.
 * @apiGroup Restaurant
 * @apiName AllRestaurantsWithDishes
 * @apiDescription Gets all Restaurant from database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/restaurants/findRestaurantsWithDishes
 * @apiError Error 404 Not Found
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse AllRestaurantsWithDishesSuccessResponse
 */

router.route('/findRestaurantsWithDishes').get(restaurantController.findRestaurantsWithDishes)

module.exports = router 

