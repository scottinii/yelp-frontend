import React from "react";
import styles from "./BusinessRating.module.css";
import Rating from "react-rating";

export function BusinessRating({ rating, reviewCount }) {
    return (
        <div className={styles.rating}>
            <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                fractions={2}
                readonly
                initialRating={rating}
            />
            <p>{reviewCount} Reviews</p>
        </div>
    );
}
