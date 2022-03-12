const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
});

const User = new mongoose.model('User', userSchema);

module.exports = User;
