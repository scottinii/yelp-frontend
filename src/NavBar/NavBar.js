import React, { useState } from "react";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile.jpeg"; 
import styles from "./NavBar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export function NavBar({ signedInUser, handleLogout, term, location, search }) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleLogoutClick = () => {
        handleLogout(); 
        setDropdownVisible(false);
    };
    return (
        <div className={styles['nav-bar']}>
            <Link to="/"><img src={logo} className={styles.logo} alt="logo" /></Link>
            <SearchBar small term={term} location={location} search={search} /> {/* Pass `search` */}
            {signedInUser ? (
                <div className={styles.profile}>
                    <span className={styles.email}>{signedInUser}</span>
                    <img
                    src={profileImage}
                    className={styles["profile-icon"]}
                    onClick={toggleDropdown}
                    />
                    {isDropdownVisible && (
                    <div className={styles["dropdown-menu"]}>
                        <span>{signedInUser}</span>
                        <button onClick={handleLogoutClick}>Log Out</button>
                    </div>
                    )}
                </div>
            ) : (
            <>
                <Link to="/login" className="button">
                Login
                </Link>
                <Link to="/signup" className="button">
                Sign Up
                </Link>
            </>
            )}
        </div>
    );
}
