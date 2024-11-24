import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export function SearchBar({ term, location, search }) {
    // Use the props directly
    const [currentTerm, setCurrentTerm] = useState(term);
    const [currentLocation, setCurrentLocation] = useState(location);

    function submit(e) {
        e.preventDefault();
        if (typeof search === 'function') {
            search(currentTerm, currentLocation); // Pass updated values
        }
    }

    const sizeClass = 'is-medium'; // Simplified for example
    return (
        <form onSubmit={submit}>
            <div className="field has-addons">
                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>Search</button>
                </p>
                <p className="control">
                    <input
                        className={`input ${sizeClass} ${styles['input-control']}`}
                        onChange={(e) => setCurrentTerm(e.target.value)}
                        type="text"
                        value={currentTerm}
                        placeholder="Restaurants"
                    />
                </p>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>NEAR</div>
                </div>
                <p className="control">
                    <input
                        className={`input ${sizeClass} ${styles['input-control']}`}
                        onChange={(e) => setCurrentLocation(e.target.value)}
                        type="text"
                        value={currentLocation}
                        placeholder="Where"
                    />
                </p>
                <div
                    className={`button ${sizeClass} ${styles['search-button']}`}
                    onClick={submit}
                >
                    <span className={`icon is-small ${styles['search-icon']}`}>
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </form>
    );
}
