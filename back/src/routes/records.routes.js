//modules and libraries
const { Router } = require('express')
const recordsControllers = require('../controllers/records.controllers')

//Creating router instance
const router = Router()

//routes
router.route('/')
    .get(recordsControllers.getAllRecords)
    .post(recordsControllers.addRecord)
router.route('/:id')
    .put(recordsControllers.updateRecord)
    .delete(recordsControllers.deleteRecord)

//exports router
module.exports = router