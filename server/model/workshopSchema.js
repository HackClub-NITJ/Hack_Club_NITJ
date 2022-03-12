const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    doneBy: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    linkOfWorkshop: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Workshop = new mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;
