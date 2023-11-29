const express = require('express');
const router = express.Router();

// Controller
const bookedController = require('../controllers/bookedappointments.controller');

// Routings
router.post('/createBooked', bookedController.createBooked);
router.get('/getAllBooked', bookedController.getAllBooked);
router.get('/getBookedById/:id', bookedController.getBookedById);
router.put('/updateBookedById/:id', bookedController.updateBookedById);
router.delete('/deleteBookedById/:id', bookedController.deleteBookedById);
router.get('/changeBookedIsActiveById/:id', bookedController.changeBookedIsActiveById);

module.exports = router;