import React from "react";
import styles from "./SearchResult.module.css";
import { BusinessRating } from "../../../BusinessRating/BusinessRating";

export function SearchResult({ business }) {
    // If no business data is provided, return an empty div
    if (!business) {
        return <div />;
    }

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
                <BusinessRating reviewCount={business.review_count} rating={business.rating} />
                <p>
                    {business.price || "N/A"}{" "}
                    {business.categories &&
                        business.categories.map((category) => (
                            <span key={category.alias} className="tag">
                                {category.title}
                            </span>
                        ))}
                </p>
            </div>
            {/* Contact Info */}
            <div className={styles['contact-info']}>
                <p>{business.display_phone || "N/A"}</p>
                <p>{business.location?.address1 || "N/A"}</p>
                <p>{business.location?.city || "N/A"}</p>
            </div>
        </div>
    );
}
