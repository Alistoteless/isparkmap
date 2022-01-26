const express = require('express')

const parkController = require('../controllers/park-controller')

const router = express.Router()

router.post('/park', parkController.createPark)
router.put('/park/:id', parkController.updatePark)
router.delete('/park/:id', parkController.deletePark)
router.get('/park/:id', parkController.getParkById)
router.get('/parks', parkController.getParks)

router.get('/parks/fetch-from-ispark', parkController.fetchFromIspark)
router.get('/parks/deleteAll', parkController.deleteAll)

module.exports = router
