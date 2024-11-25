import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { SearchResultSummary } from "./SearchResultsSummary/SearchResultsSummary";
import { SearchResults } from "./SearchResults/SearchResults";
import { useLocation } from "react-router-dom";
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";

export function Search() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const term = params.get("find_desc") || "Default Term";
    const locationParam = params.get("find_loc") || "Default Location";

    const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(term, locationParam);

    // Define the search function to handle user input
    function search(newTerm, newLocation) {
        console.log("Search called with:", newTerm, newLocation);
        performSearch({ term: newTerm, location: newLocation }); // Call performSearch with updated params
    }

    return (
        <div>
            <NavBar term={term} location={locationParam} search={search} />
            <SearchResultSummary
                term={searchParams.term}
                location={searchParams.location}
                resultsCount={amountResults || 0}
                shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults businesses={businesses} />
        </div>
    );
}
