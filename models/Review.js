const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    reviewBody: {
        type: String,
        required: true,
    },
   
});

module.exports = mongoose.model('Reviews', ReviewSchema);