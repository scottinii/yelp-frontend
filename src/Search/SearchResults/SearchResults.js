import React from "react";
import { SearchResult } from "./SearchResult/SearchResult";
import styles from "./SearchResults.module.css";
import { Spinner } from "../../Spinner/Spinner"; // Update the path if needed

export function SearchResults({ businesses }) { 
    // Show Spinner if businesses is not available or empty
    if (!businesses || businesses.length === 0) {
        return (
            <div className={styles['search-results']}>
                <Spinner />
            </div>
        );
    }

    // Render business results when data is available
    const searchResults = businesses.map(b => <SearchResult key={b.id} business={b} />);

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}
