import React from "react";
import { TopNav } from "./TopNav/TopNav";
import logo from "../assets/logo.png";
import styles from "./LandingPage.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchSuggestions } from "./SearchSuggestions/SearchSuggestions";
import { useNavigate } from "react-router-dom";

export function LandingPage({ signedInUser, handleLogout }) {
    const navigate = useNavigate();

    function search(term, location) {
        const urlEncodedTerm = encodeURIComponent(term);
        const urlEncodedLocation = encodeURIComponent(location);
        navigate(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }

    return (
        <div className={styles.landing}>
            <div className={styles["search-area"]}>
                <TopNav signedInUser={signedInUser} handleLogout={handleLogout}/>
                <img src={logo} className={styles.logo} alt="logo" />
                <SearchBar search={search} />
                <SearchSuggestions />
            </div>
        </div>
    );
}