const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')
router.route('/login').post(userController.login)
module.exports = router