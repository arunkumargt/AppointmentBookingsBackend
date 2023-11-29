const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookings_code: { type: String, required: true, unique: true },
    bookings_name: { type: String, required: true },
    bookings_desc: { type: String, required: true },
    bookings_img: { type: String, required: true },
    bookings_type: { type: String, required: true, default: 'Normal' },
    unit_price: { type: Number, required: true },
    sale_price: { type: Number, required: true },
    offer_price: { type: Number, required: true },
    offer_percentage: { type: Number, required: true, default: 0 },
    isActive: { type: Boolean, required: true, default: true },
    createdBy: { type: String, required: true },
    createdOn: { type: Date, required: true, default: Date.now() },
    updatedBy: { type: String, required: true },
    updatedOn: { type: Date, required: true, default: Date.now() },
    remarks: { type: String, required: true }
}, {
    collection: 'AppointmentBookings'
});

module.exports = mongoose.model('bookings', bookingSchema);