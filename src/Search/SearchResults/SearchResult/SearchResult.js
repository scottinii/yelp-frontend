import React from "react";
import styles from "./SearchResult.module.css";
import { BusinessRating } from "../../../BusinessRating/BusinessRating";

export function SearchResult({ business }) {
    // If no business data is provided, return an empty div
    if (!business) {
        return <div />;
    }

    // Generate tags for categories
    const tags = business.categories.map((category) => (
        <span key={category.alias} className={`tag ${styles['business-tag']}`}>
            {category.title}
        </span>
    ));

    // Generate address lines
    const addressLines = business.location.display_address.map((line, index) => (
        <p key={`${business.id}-address-${index}`}>{line}</p>
    ));

    return (
        <div className={styles['search-result']}>
            {/* Business Image */}
            <img
                src={business.image_url || "https://via.placeholder.com/150"}
                alt={business.name || "Business"}
                className={styles['business-image']}
            />
            {/* Business Info */}
            <div className={styles['business-info']}>
                <h2 className="subtitle">{business.name || "N/A"}</h2>
                <BusinessRating
                    reviewCount={business.review_count}
                    rating={business.rating}
                />
                <p>
                    {business.price || "N/A"} {tags}
                </p>
            </div>
            {/* Contact Info */}
            <div className={styles['contact-info']}>
                <p>{business.phone || "N/A"}</p>
                {addressLines}
            </div>
        </div>
    );
}
