const express = require('express');
const router = express.Router();

router.use("/dish", require("./DishRoute"));
router.use("/restaurants",  require("./RestaurantRoute"));
router.use("/chef", require("./ChefRoute"));

module.exports = router