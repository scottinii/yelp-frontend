import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import styles from "./TopNav.module.css";

export function TopNav({ signedInUser, handleLogout }) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleLogoutClick = () => {
        handleLogout(); 
        setDropdownVisible(false);
    };
  console.log(signedInUser);
  return (
    <div className={styles["top-nav"]}>
      <div className={styles.left}>
        <span>Write a Review</span>
        <span>Events</span>
      </div>
      <div className={styles.right}>
        {signedInUser ? (
          <div className={styles.profile}>
            <span className={styles.email}>{signedInUser}</span>
            <img
              src="/assets/profile.jpeg"
              alt="Profile Icon"
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
    </div>
  );
}