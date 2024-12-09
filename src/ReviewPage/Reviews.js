import React, { useState } from "react";
import "./Reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(0);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview && rating) {
            const review = { text: newReview, rating };
            setReviews([...reviews, review]);
            setNewReview("");
            setRating(0);
        } else {
            alert("Please provide both a review and a rating.");
        }
    };

    const handleStarClick = (index) => {
        setRating(index + 1); // Ratings are 1-based
    };

    return (
        <div className="reviews-container">
            <h1>Reviews</h1>
            <form onSubmit={handleReviewSubmit}>
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
                            <p>{review.text}</p>
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
