import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = ({ onSignUp }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = () => {
        if (Cookies.get(email)) {
            alert("An account with this email already exists. Please log in.");
            return;
        }

        if (email && password) {
            Cookies.set(email, password, { expires: 7 });
            onSignUp(email);
            navigate("/");
        } else {
            alert("Please enter both email and password.");
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
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;