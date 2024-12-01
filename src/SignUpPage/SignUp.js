import React, { useState } from "react";
import Cookies from "js-cookie";
import "./SignUp.css";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        if (username && password) {
            Cookies.set(username, password, { expires: 7 });
            alert("Sign-up successful! You can now log in.");
            setUsername("");
            setPassword("");
        } else {
            alert("Please enter both username and password.");
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignUp();
                }}
            >
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;