const express = require('express')
const Controller = require('../Controllers/usersController')
const router = express.Router()

router.post('/users', Controller.createUser)

router.post('/users/auth', Controller.authUser)

module.exports = router
