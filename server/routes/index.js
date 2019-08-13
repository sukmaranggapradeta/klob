const Route = require('express').Router()
const DataController = require('../controllers/index')

Route.get('/', DataController.welcome)
Route.get('/home', DataController.getIndex)
Route.get('/educational', DataController.getEducational)
Route.get('/company', DataController.getCompany)
Route.get('/community', DataController.getComunity)

module.exports = Route