const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    usercode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneno: { type: String, required: true },
    password: { type: String, required: true },
    usertype: { type: String, required: true, default: 'user' },
    isAlive: { type: Boolean, required: true, default: true },
    isLogin: { type: Boolean, required: true, default: false },
    isMembership: { type: Boolean, required: true, default: false },
    createdBy: { type: String, required: true },
    createdOn: { type: Date, required: true, default: Date.now() },
    updatedBy: { type: String, required: true },
    updatedOn: { type: Date, required: true, default: Date.now() },
    remarks: { type: String, required: true }
}, {
    collection: 'Users'
});

module.exports = mongoose.model('users', userSchema);