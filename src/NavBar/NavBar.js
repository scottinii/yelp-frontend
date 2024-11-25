import React from "react";
import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export function NavBar({ term, location, search }) { // Destructure all props, including `search`
    return (
        <div className={styles['nav-bar']}>
            <Link to="/"><img src={logo} className={styles.logo} alt="logo" /></Link>
            <SearchBar small term={term} location={location} search={search} /> {/* Pass the `search` prop to SearchBar */}
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    );
}
