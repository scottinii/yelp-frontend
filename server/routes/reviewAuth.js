const express = require('express');
const router = express.Router();
const Review = require('../models/Review'); // Import the Review model

// Endpoint to get reviews for a specific user
router.get('/', async (req, res) => {
    const { email } = req.query; // Get user email from query string
    try {
        const reviews = await Review.find({ userEmail: email }); // Fetch reviews by user email
        res.status(200).json({ reviews });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews.' });
    }
});

// Endpoint to submit a new review
router.post('/', async (req, res) => {
    const { text, rating, restaurantName, userEmail } = req.body; // Get review data from the request body
    try {
        const newReview = new Review({ text, rating, restaurantName, userEmail }); // Create a new review document
        await newReview.save(); // Save it to the database
        res.status(201).json({ message: 'Review submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving review.' });
    }
});

// Endpoint to delete a review by ID
router.delete('/', async (req, res) => {
    const { id } = req.body; // Get review ID from request body
    try {
        if (!id) {
            return res.status(400).json({ message: 'Review ID is required' });
        }

        // Attempt to find and delete the review by its ID
        const deletedReview = await Review.findByIdAndDelete(id);
        
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ message: 'Error deleting review' });
    }
});

module.exports = router;
