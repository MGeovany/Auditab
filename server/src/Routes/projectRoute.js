const express = require('express')
const Controller = require('../Controllers/projectController')
const router = express.Router()

router.post('/project', Controller.create)

router.put('/project/:id', Controller.update)

router.get('/project', Controller.getAll)

router.get('/project/name', Controller.getbyName)

router.get('/project/:id', Controller.getbyID)

router.delete('/project/:id', Controller._delete)

module.exports = router
