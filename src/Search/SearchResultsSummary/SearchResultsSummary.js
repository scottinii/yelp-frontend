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
            <div className={styles.filters}>
                <button className="button">
                    <span className="icon"><i className="fas fa-sliders-h"></i></span>
                    <span>All Filters</span>
                </button>
                <div className="buttons has-addons">
                    <button className="button">$</button>
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button">$$$$</button>
                </div>
                <button className="button">
                    <span className="icon"><i className="fas fa-clock"></i></span>
                    <span>Open Now</span>
                </button>
                <button className="button">
                    <span className="icon"><i className="fas fa-dollar-sign"></i></span>
                    <span>Cashback</span>
                </button>
            </div>
        </div>
    );
}
