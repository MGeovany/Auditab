const express = require('express')
const Controller = require('../Controllers/usersController')
const router = express.Router()

router.post('/users', Controller.createUser)

router.put('/users/:id', Controller.updateUser)

router.get('/users', Controller.getAllUsers)

router.get('/users/name', Controller.getbyName)

router.get('/users/:id', Controller.getbyID)

router.delete('/users/:id', Controller.deleteUser)

router.post('/users/auth', Controller.authUser)

module.exports = router
