import React, { useState } from "react";
import { Link} from "react-router-dom";
import profileImage from "../../assets/profile.jpeg"; 
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
    </div>
  );
}