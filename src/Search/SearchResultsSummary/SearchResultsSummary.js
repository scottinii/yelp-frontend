import React from "react";
import styles from "./SearchResultsSummary.module.css";

export function SearchResultSummary({ term = "Results", location = "your area", resultsCount = 543 }) { // Destructure with default values
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className="subtitle">
                    <strong>{term}</strong> {location}
                </h1>
                <p>Showing 1-20 out of {resultsCount} results</p> {/* Dynamically render results count */}
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