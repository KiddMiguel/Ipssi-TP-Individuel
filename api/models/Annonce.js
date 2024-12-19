const mongoose = require('mongoose');

const annonceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    category: {
        type: String,
        // ref: 'Category',
        // required: true
    },
});

const Annonce = mongoose.model('Annonce', annonceSchema);

module.exports = Annonce;