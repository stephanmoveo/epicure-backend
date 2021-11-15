const express = require('express');
const router = express.Router();
const chefController = require('../controllers/ChefController')


router.route('/createChef').post(chefController.createChef)
router.route('/readFindChef/:id').get(chefController.findChef)
router.route('/updateChef').post(chefController.updateChef)
router.route('/deleteChef/:id').get(chefController.deleteChef)
router.route('/allChefs').get(chefController.allChefs)
module.exports = router