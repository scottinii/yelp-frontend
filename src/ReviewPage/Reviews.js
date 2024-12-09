import React, { useEffect, useState } from "react";
import "./Reviews.css";

const Reviews = () => {
    const [restaurantName, setRestaurantName] = useState(""); // State to store restaurant name
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(0); // Rating state to store selected rating

    // Load reviews from local storage when the component mounts
    useEffect(() => {
        const savedReviews = localStorage.getItem("reviews");
        if (savedReviews) {
            setReviews(JSON.parse(savedReviews)); // Parse and set reviews from localStorage
        }
    }, []);

    // Save reviews to local storage whenever they change
    useEffect(() => {
        if (reviews.length > 0) {
            localStorage.setItem("reviews", JSON.stringify(reviews)); // Save reviews to localStorage
        }
    }, [reviews]);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview && rating && restaurantName) {
            const review = { text: newReview, rating, restaurantName };
            const updatedReviews = [...reviews, review];
            setReviews(updatedReviews); // Update state with the new review
            setNewReview(""); // Reset the review input field
            setRating(0); // Reset the rating
            setRestaurantName(""); // Reset the restaurant name input
        } else {
            alert("Please provide both a review, a rating, and a restaurant name.");
        }
    };

    const handleStarClick = (index) => {
        setRating(index + 1); // Ratings are 1-based
    };

    return (
        <div className="reviews-container">
            <h1>Write a Review</h1>
            <form onSubmit={handleReviewSubmit}>
                <input
                    type="text"
                    placeholder="Enter restaurant name"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Write your review here..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    required
                />
                <div className="star-rating">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={index < rating ? "star filled" : "star"}
                            onClick={() => handleStarClick(index)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <button type="submit">Submit Review</button>
            </form>
            <div className="review-list">
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className="review-item">
                            <p><strong>Restaurant:</strong> {review.restaurantName}</p>
                            <p><strong>Review:</strong> {review.text}</p>
                            <p><strong>Stars:</strong></p>
                            <div className="star-rating">
                                {[...Array(5)].map((_, starIndex) => (
                                    <span
                                        key={starIndex}
                                        className={
                                            starIndex < review.rating
                                                ? "star filled"
                                                : "star"
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to add one!</p>
                )}
            </div>
        </div>
    );
};

export default Reviews;
