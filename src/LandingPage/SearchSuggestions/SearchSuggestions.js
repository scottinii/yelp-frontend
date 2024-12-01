import React from "react";
import styles from "./SearchSuggestions.module.css";

export function SearchSuggestions() { 
    return (
        <div className={styles.suggestions}>
            <span className="icon is-small"><i className="fas fa-utensils"></i></span><span className={styles.suggestion}>Restaurants</span>
        </div>
    )
}