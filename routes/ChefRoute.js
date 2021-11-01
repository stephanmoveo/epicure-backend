const express = require('express');
const router = express.Router();
const chefController = require('../controllers/ChefController')


router.route('/createChef').post(chefController.createChef)
router.route('/findChef/:lastName').get(chefController.findChef)


module.exports = router