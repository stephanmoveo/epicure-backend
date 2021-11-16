const express = require("express");
const router = express.Router();
const chefController = require("../controllers/ChefController"); 


/**
 * @api {post} admin/chef/createChef Create Chef.
 * @apiGroup Chef
 * @apiName createChef
 * @apiParam {String} firstName Chef firstName.
 * @apiParam {String} lastName Chef lastName.
 * @apiParam {String} description Chef description.
 * @apiParam {String} image Chef image.
 * @apiDescription Creates a new Chef in database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/chef/createChef
 * @apiUse MustFillFiledsError
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse SuccessResponse
 */

router.route("/createChef").post(chefController.createChef);

/**
 * @api {get} chef/readFindChef/:id Find Chef by ID.
 * @apiGroup Chef
 * @apiName findChef
 * @apiParam {String} id Chef unique ID.
 * @apiDescription Finds a Chef and his Restaurants from database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/chef/readFindChef/618105c865292eca5983
 * @apiUse Admin
 * @apiUse ChefNotFoundError
 * @apiUse FindChefSuccessResponse
*/

router.route("/readFindChef/:id").get(chefController.findChef);

/**
 * @api {post} chef/updateChef Update Chef by ID.
 * @apiName updateChef
 * @apiGroup Chef
 * @apiDescription Updates a Chef in database.
 * @apiParam {String} id Chef unique ID.
 * @apiParam {String} firstName Chef firstName.
 * @apiParam {String} lastName Chef lastName.
 * @apiParam {String} description Chef description.
 * @apiParam {String} image Chef image.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/chef/updateChef
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse SuccessResponse
 * @apiUse ChefNotFoundError
 */
router.route("/updateChef").post(chefController.updateChef);


/**
 * @api {get} chef/deleteChef/:id Delete Chef by ID.
 * @apiName DeleteChef
 * @apiGroup Chef
 * @apiDescription Marks a Chef Valid Field to False.
 * @apiParam {String} id Chef unique ID.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/chef/deleteChef/619230673ada83350855794f
 * @apiUse Admin
 * @apiUse EpicureHeaderSet
 * @apiUse ChefNotFoundError
 * @apiUse SuccessResponse
 */

router.route("/deleteChef/:id").get(chefController.deleteChef);

/**
 * @api {get} chef/allChefs Show All Chef.
 * @apiGroup Chef
 * @apiName AllChefs
 * @apiDescription Gets all Chef database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/chef/allChefs
 * @apiError Error 404 Not Found
 * @apiUse EpicureHeaderSet
 * @apiUse Admin
 * @apiUse AllChefsSuccessResponse
 */

router.route("/allChefs").get(chefController.allChefs);

module.exports = router;
