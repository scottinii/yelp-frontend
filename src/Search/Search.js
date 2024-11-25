import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { SearchResultSummary } from "./SearchResultsSummary/SearchResultsSummary";
import { SearchResults } from "./SearchResults/SearchResults";
import { useLocation } from 'react-router-dom'; // Import useLocation
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";

export function Search() {
    const location = useLocation(); // Get the current location object
    const params = new URLSearchParams(location.search); // Parse the query parameters
    const term = params.get('find_desc'); // Extract the "find_desc" query parameter
    const locationParam = params.get('find_loc'); // Extract the "find_loc" query parameter
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

    return (
        <div>
            <NavBar term={term} location={locationParam} />
            <SearchResultSummary term={term} location={locationParam} />
            <SearchResults businesses={businesses}/>
        </div>
    );
}