import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { SearchResultSummary } from "./SearchResultsSummary/SearchResultsSummary";
import { SearchResults } from "./SearchResults/SearchResults";
import { useLocation, useNavigate } from "react-router-dom"; // Use `useNavigate`
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";
import { useUser } from "../UserContext";

export function Search() {
    const location = useLocation(); // Access the current URL location
    const navigate = useNavigate(); // Use `useNavigate` for programmatic navigation
    const params = new URLSearchParams(location.search);
    const term = params.get("find_desc");
    const locationParam = params.get("find_loc");

    const { signedInUser, handleLogout } = useUser();
    console.log("Signed-in user in Search:", signedInUser);

    // Destructure `performSearch` from `useBusinessSearch`
    const [businesses, amountResults, performSearch] = useBusinessSearch(term, locationParam);

    // Redirect to home if term or location is missing
    React.useEffect(() => {
        if (!term || !locationParam) {
            navigate("/"); // Use navigate to redirect to the home page
        }
    }, [term, locationParam, navigate]);

    // Define the search function
    const search = (newTerm, newLocation) => {
        const encodedTerm = encodeURIComponent(newTerm); // Properly encode the new term
        const encodedLocation = encodeURIComponent(newLocation); // Properly encode the new location
        navigate(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`); // Update URL
        performSearch({ term: newTerm, location: newLocation }); // Call performSearch
    };

    return (
        <div>
            <NavBar term={term} location={locationParam} search={search} signedInUser={signedInUser} handleLogout={handleLogout} />
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
