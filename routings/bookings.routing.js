const express = require('express');
const router = express.Router();

// Controller
const bookingsController = require('../controllers/bookings.controller');

// Routings
router.post('/createBookings', bookingsController.createBookings);
router.get('/getAllBookings', bookingsController.getAllBookings);
router.get('/getBookingById/:id', bookingsController.getBookingById);
router.put('/updateBookingById/:id', bookingsController.updateBookingById);
router.delete('/deleteBookingById/:id', bookingsController.deleteBookingById);
router.get('/changeBookingIsActiveById/:id', bookingsController.changeBookingIsActiveById);

module.exports = router;