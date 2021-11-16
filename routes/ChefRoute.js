const express = require("express");
const router = express.Router();
const chefController = require("../controllers/ChefController");

/**
  * @apiDefine Admin
  * @apiPermission admin
 */

/**
  * @apiDefine ChefHeaderSet
  * @apiHeaderExample {json} Header-Example:
  * {"Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.c3RlcGhhbg.5jwdxSizfbyIUJ9u0vJaTFM-3rAarPwSxcaUs_N7xsU "}
 */

/**
 * @apiDefine ChefSuccessResponse
 *
 * @apiSuccess {Boolean} Chef succses
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "succses": "true"
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
 * @api {post} admin/chef/createChef Create Chef.
 * @apiGroup Chef
 * @apiParam {String} firstName Chef firstName.
 * @apiParam {String} lastName Chef lastName.
 * @apiParam {String} description Chef description.
 * @apiParam {String} image Chef image.
 * @apiError Empty fields
 * @apiUse MustFillFiledsError
 * @apiDescription Creates a new Chef in database.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/chef/createChef
 * @apiUse ChefHeaderSet
 * @apiName createChef
 * @apiUse Admin
 * @apiUse ChefSuccessResponse
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
 * @apiSuccessExample {json} Success-Response:
 * [
     {
        "chef": {
            "_id": "618105c865292eca59830e68",
            "firstName": "Yossi",
            "lastName": "Shitrit",
            "image": "assets/img/chefs/yossi.jpg",
            "description": "Chef Yossi Shitrit has been living"
        },
        "restaurants": [
            {
                "_id": "618107960bb6f9c3176d110c",
                "name": "Onza",
                "image": "assets/img/Rests/All/onza.jpg",
                "chef": "618105c865292eca59830e68",
                "valid": true
            }
        ]
     }
    ]
*
*/

router.route("/readFindChef/:id").get(chefController.findChef);

/**
 * @api {post} chef/updateChef/:id Update Chef by ID.
 * @apiName updateChef
 * @apiGroup Chef
 * @apiDescription Updates a Chef in database.
 * @apiParam {String} id Chef unique ID.
 * @apiParam {String} firstName Chef firstName.
 * @apiParam {String} lastName Chef lastName.
 * @apiParam {String} description Chef description.
 * @apiParam {String} image Chef image.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/chef/updateChef/619230673ada83350855794f
 * @apiUse ChefHeaderSet
 * @apiUse Admin
 * @apiUse ChefSuccessResponse
 * @apiUse ChefNotFoundError
 */
router.route("/updateChef").post(chefController.updateChef);


/**
 * @api {get} chef/deleteChef/:id Delete Chef by ID.
 * @apiName DeleteChef
 * @apiGroup Chef
 * @apiDescription Marks a Chef Valid Field to False.
 * @apiParam {String} id Chefs unique ID.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/admin/chef/deleteChef/619230673ada83350855794f
 * @apiUse Admin
 * @apiUse ChefHeaderSet
 * @apiUse ChefNotFoundError
 * @apiUse ChefSuccessResponse
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
 * @apiUse ChefHeaderSet
 * @apiUse Admin
 * @apiSuccessExample {json} Success-Response:
 *[
    {
        "_id": "string",
        "firstName": "string",
        "lastName": "string", 
        "image": "string", 
        "description": "string"
    }
]
 *
 */

router.route("/allChefs").get(chefController.allChefs);

module.exports = router;
