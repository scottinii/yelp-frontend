import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.css";

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className={styles.right}>
            <Link to="/login">
                    <button className="button">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="button">Sign Up</button>
                </Link>
            </div>
        </div>
    );
}