import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../config";
import "./Reviews.css";

const Reviews = () => {
    const [restaurantName, setRestaurantName] = useState("");
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState("");
    const [rating, setRating] = useState(0);
    const loggedInUser = Cookies.get("signedInUser"); // Get logged-in user email
    const navigate = useNavigate();

    // Fetch user reviews from the backend when the component mounts
    useEffect(() => {
        const fetchUserReviews = async () => {
            if (loggedInUser) {
                try {
                    const response = await fetch(`${API_BASE_URL}/reviews?email=${loggedInUser}`);
                    const data = await response.json();
                    if (response.ok) {
                        setReviews(data.reviews); // Assuming response contains the reviews
                    } else {
                        console.log("Error fetching reviews:", data.message);
                    }
                } catch (error) {
                    console.error("Error fetching reviews:", error);
                }
            }
        };
        fetchUserReviews();
    }, [loggedInUser]);

    // Submit a new review to the backend
    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        if (newReview && rating && restaurantName) {
            const review = {
                text: newReview,
                rating,
                restaurantName,
                userEmail: loggedInUser,
            };
            try {
                const response = await fetch(`${API_BASE_URL}/reviews`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(review),
                });
                const data = await response.json();
                if (response.ok) {
                    setReviews((prevReviews) => [...prevReviews, review]);
                    setNewReview("");
                    setRating(0);
                    setRestaurantName("");
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error("Error submitting review:", error);
                alert("An error occurred while submitting your review.");
            }
        } else {
            alert("Please provide both a review, a rating, and a restaurant name.");
        }
    };

    // Handle review deletion
    const handleDeleteReview = async (indexToDelete) => {
        const reviewToDelete = reviews[indexToDelete]; // Get the review object
        const reviewId = reviewToDelete._id; // Assuming review has an _id field
        
        try {
            // Send a DELETE request to the backend with the review ID
            const response = await fetch(`${API_BASE_URL}/reviews`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: reviewId }),
            });

            const data = await response.json();

            if (response.ok) {
                setReviews((prevReviews) => prevReviews.filter((_, index) => index !== indexToDelete));
            } else {
                console.error('Failed to delete review:', data.message);
                alert('Failed to delete review');
            }
        } catch (error) {
            console.error('Error deleting review:', error);
            alert('An error occurred while deleting your review');
        }
    };

    return (
        <div className="reviews-container">
            <button className="close-button" onClick={() => navigate("/")}>
                ✖
            </button>
            <h1>Your Reviews</h1>
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
                            onClick={() => setRating(index + 1)}
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
                        <div key={review._id} className="review-item">
                            <p><strong className="dark-text">Restaurant:</strong> {review.restaurantName}</p>
                            <p><strong className="dark-text">Review:</strong> {review.text}</p>
                            <p><strong className="dark-text">Stars:</strong></p>
                            <div className="star-rating">
                                {[...Array(5)].map((_, starIndex) => (
                                    <span
                                        key={starIndex}
                                        className={starIndex < review.rating ? "star filled" : "star"}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <button
                                className="delete-button"
                                onClick={() => handleDeleteReview(index)}
                            >
                                Delete
                            </button>
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
