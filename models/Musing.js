const mongoose = require('mongoose');

const MusingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    musingBody: {
        type: String,
        required: true,
    },
   
});

module.exports = mongoose.model('Musings', MusingSchema);