/**
 * @apiDefine ChefNotFoundError
 *
 * @apiError ChefNotFound The id of the Chef was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": "id not found" 
 *     }
 */

/**
 * @apiDefine DishNotFoundError
 *
 * @apiError DishNotFound The id of the Dish was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": "id not found" 
 *     }
 */

/**
 * @apiDefine RestaurantNotFoundError
 *
 * @apiError RestaurantNotFound The id of the Restaurant was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *      "error": "id not found" 
 *     }
 */

/**
 * @apiDefine MustFillFiledsError
 * @apiErrorExample {json} Error-Response:
 * { 
 *    error: "Must Fill All Fields" 
 * }
 */

/**
 * @apiDefine LoginError
 * @apiErrorExample {json} Error-Response:
 * {
 *  "succes": false
 * }
 */

