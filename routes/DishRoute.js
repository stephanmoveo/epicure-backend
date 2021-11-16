const express = require('express');
const router = express.Router();
const dishController = require('../controllers/DishController')

/**
 * @api {post} dish/createDish Create Dish.
 * @apiGroup Dish
 * @apiName createDish
 * @apiDescription Creates a new Dish in database.
 * @apiParam {String} name Dish name.
 * @apiParam {String} description Dish description.
 * @apiParam {String} image Dish image.
 * @apiParam {Object} [typeIcon] typeIcon object.
 * @apiParam {Boolean} [typeIcon[spicy]] if Dish is spicy.
 * @apiParam {Boolean} [typeIcon[vegan]] if Dish is vegan.
 * @apiParam {Boolean} [typeIcon[vegeterian]] if Dish is vegeterian.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/dish/createDish
 * @apiUse MustFillFiledsError
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse SuccessResponse
 */


router.route('/createDish').post(dishController.createDish)

/**
 * @api {post} dish/updateDish Update Dish by ID.
 * @apiName updateDish
 * @apiGroup Dish
 * @apiDescription Updates a Dish in database.
 * @apiParam {String} id Dish unique ID.
 * @apiParam {String} name Dish name.
 * @apiParam {String} description Dish description.
 * @apiParam {String} image Dish image.
 * @apiParam {Object} [typeIcon] typeIcon object.
 * @apiParam {Boolean} [typeIcon[spicy]] if Dish is spicy.
 * @apiParam {Boolean} [typeIcon[vegan]] if Dish is vegan.
 * @apiParam {Boolean} [typeIcon[vegeterian]] if Dish is vegeterian.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/dish/updateDish
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse SuccessResponse
 * @apiUse DishNotFoundError
 */


router.route('/updateDish').post(dishController.updateDish)

/**
 * @api {get} dish/findDish/:id Find Dish by ID.
 * @apiGroup Dish
 * @apiName findDish
 * @apiDescription Finds a Dish from database.
 * @apiParam {String} id Dish unique ID.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/dish/findDish/619230a83ada833508557956
 * @apiUse Admin
 * @apiUse DishNotFoundError
 * @apiUse FindDishSuccessResponse
*/


router.route('/findDish/:id').get(dishController.findDish)

/**
 * @api {get} chef/deleteChef/:id Delete Dish by ID.
 * @apiName DeleteDish
 * @apiGroup Dish
 * @apiDescription Marks a Dish Valid Field to False.
 * @apiParam {String} id Dish unique ID.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/dish/deleteDish/619230a83ada833508557956
 * @apiUse Admin
 * @apiUse EpicureHeaderSet
 * @apiUse DishNotFoundError
 * @apiUse SuccessResponse
 */


router.route('/deleteDish/:id').get(dishController.deleteDish)


/**
 * @api {get} dish/readAllDishes Show All Dish.
 * @apiGroup Dish
 * @apiName AllDishs
 * @apiDescription Gets all Dish database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/dish/readAllDishes
 * @apiError Error 404 Not Found
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse AllDishesSuccessResponse
 */

router.route('/readAllDishes').get(dishController.allDishes)

module.exports = router