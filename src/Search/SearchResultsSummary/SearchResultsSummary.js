import React from "react";
import styles from "./SearchResultsSummary.module.css";

export function SearchResultSummary({ 
    term = "Results", 
    location = "your area", 
    resultsCount = 0, // Default to 0 if no results are available
    shownResults = 0 
}) {
    // Generate result statistics dynamically based on props
    const resultStats = (
        <p>
            Showing 1-{shownResults} out of {resultsCount} results
        </p>
    );

    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className="subtitle">
                    <strong>{term}</strong> {location}
                </h1>
                {resultStats} {/* Render result stats */}
            </div>
        </div>
    );
}
