import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { SearchResultSummary } from "./SearchResultsSummary/SearchResultsSummary";
import { SearchResults } from "./SearchResults/SearchResults";
import { useLocation } from "react-router-dom";
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";

export function Search() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc') || "Default Term";
    const locationParam = params.get('find_loc') || "Default Location";

    // Destructure `performSearch` from `useBusinessSearch`
    const [businesses, amountResults, performSearch] = useBusinessSearch(term, locationParam);

    // Define the search function
    const search = (newTerm, newLocation) => {
        console.log('Search called with:', newTerm, newLocation);
        performSearch({ term: newTerm, location: newLocation }); // Call performSearch
    };

    return (
        <div>
            <NavBar term={term} location={locationParam} search={search} />
            <SearchResultSummary 
                term={term} 
                location={locationParam} 
                resultsCount={amountResults || 0}
                shownResults={businesses ? businesses.length : 0} 
            />
            <SearchResults businesses={businesses} />
        </div>
    );
}

