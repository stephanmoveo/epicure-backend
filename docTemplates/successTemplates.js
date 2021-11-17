/**
 * @apiDefine SuccessResponse
 *
 * @apiSuccess {Boolean} succses succses
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "succses": "true"
 *     }
 */

/**
  * @apiDefine FindChefSuccessResponse
  *
  * @apiSuccessExample {json} Success-Response:
  * HTTP/1.1 200 OK
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

/**
  * @apiDefine AllChefsSuccessResponse
  * 
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

/**
  * @apiDefine AllDishesSuccessResponse
  *
  * @apiSuccessExample {json} Success-Response:
 *[
    {
        "_id": "618140b6181ba238eb47866b",
        "name": "Garbanzo Frito",
        "image": "assets/img/dishes/Garbanzo Frito/Garbanzo_Frito.jpg",
        "description": "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
        "typeIcon": {
            "spicy": false,
            "vegan": false,
            "vegeterian": false
        },
        "price": "98",
        "restaurant": "6181094a0bb6f9c3176d1118",
        "valid": true
    }
]
 *
 */

/**
  * @apiDefine FindDishSuccessResponse
  *
  * @apiSuccessExample {json} Success-Response:
  * {
    "_id": "619230a83ada833508557956",
    "name": "Tartar",
    "image": "https://img.mako.co.il/2021/04/19/guy_bimeka_tartr_bakar_autoOrient_i.jpg",
    "description": "yamiiiiii",
    "typeIcon": {
        "spicy": false,
        "vegan": false,
        "vegeterian": true
    },
    "price": "200",
    "restaurant": "6192307f3ada833508557952",
    "valid": true
}
 *
 */


/**
  * @apiDefine AllRestaurantsWithDishesSuccessResponse
  *
  * @apiSuccessExample {json} Success-Response:
  * [
    {
        "_id": "618107960bb6f9c3176d110c",
        "name": "Onza",
        "image": "assets/img/Rests/All/onza.jpg",
        "chef": "618105c865292eca59830e68",
        "dishes": [
            {
                "_id": "61852e5f8ed864ce27f414a8",
                "name": "Shawarma",
                "image": "https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg",
                "description": "yami ",
                "typeIcon": {
                    "spicy": false,
                    "vegan": false,
                    "vegeterian": false
                },
                "price": "98",
                "restaurant": "618107960bb6f9c3176d110c",
                "valid": true
            },
        ]
    }
]
 *
 */


/**
  * @apiDefine AllRestaurantsSuccessResponse
  *
  * @apiSuccessExample {json} Success-Response:
  * [
    {
        "_id": "618107960bb6f9c3176d110c",
        "name": "Onza",
        "image": "assets/img/Rests/All/onza.jpg",
        "chef": {
            "_id": "618105c865292eca59830e68",
            "firstName": "Yossi",
            "lastName": "Shitrit"
        }
    },
]
 *
 */


/**
  * @apiDefine LoginSuccessResponse
  * 
  * @apiSuccessExample {json} Success-Response:
 *{
    "succes": true,
    "token": {
        "user": {
            "_id": "6191599e7202c388e647ef00",
            "userName": "steph",
            "password": "$2b$10$bwKRFNBbbofSrdBzPW1NUOBxmuNb9JdeFzTnXk7NLISDsv4KiZTtK"
        },
        "token": "eyJhbGciOiJIUzI1NiJ9.c3RlcGg.9iBx33Pg0KixAlcpkr-BQk0mgkOR4DRdoaBSg4sWZBM"
    }
}
 *
 */

