const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')

/**
 * @api {post} user/login User Login.
 * @apiGroup User
 * @apiName User login
 * @apiDescription Log into app.
 * @apiExample {js} Example usage:
 *  http://localhost:3000/user/login
 * @apiUse LoginError
 * @apiUse LoginSuccessResponse
 */

router.route('/login').post(userController.login)

module.exports = router