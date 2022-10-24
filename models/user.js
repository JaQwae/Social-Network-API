const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    lastAccessed: { type: Date, default: Date.now },
});

const User = mongoose.model('User',userSchema);

// const handleError = (err) => console.error(err);

module.exports = User;