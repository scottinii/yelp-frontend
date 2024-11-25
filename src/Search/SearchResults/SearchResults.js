import React from "react";
import { SearchResult } from "./SearchResult/SearchResult";
import styles from "./SearchResults.module.css";

export function SearchResults({ businesses }) { // Destructure the businesses prop directly
    if (!businesses || !businesses.length) { // Ensure businesses is defined and has length
        return <div></div>;
    }

    const searchResults = businesses.map(b => <SearchResult key={b.id} business={b} />);

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}
