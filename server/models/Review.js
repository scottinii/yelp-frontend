const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    text: String,
    rating: Number,
    restaurantName: String,
    userEmail: { type: String, required: true },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;