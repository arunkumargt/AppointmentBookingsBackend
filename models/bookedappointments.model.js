const mongoose = require('mongoose');

const bookedSchema = new mongoose.Schema({
    user_code: { type: String, required: true, unique: true },
    bookings_code: { type: String, required: true, unique: true },
    bookings_status: { type: String, required: true, default: 'Not Started' }, // Not Started, Started, Completed, Cancelled
    bookings_date: { type: Date, required: true },
    bookings_time: { type: String, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    isActive: { type: Boolean, required: true, default: true },
    createdBy: { type: String, required: true },
    createdOn: { type: Date, required: true, default: Date.now() },
    updatedBy: { type: String, required: true },
    updatedOn: { type: Date, required: true, default: Date.now() },
    remarks: { type: String, required: true }
}, {
    collection: 'BookedAppointments'
});

module.exports = mongoose.model('booked', bookedSchema);