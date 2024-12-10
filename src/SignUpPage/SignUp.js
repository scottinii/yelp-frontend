import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; 
import "./SignUp.css";
import { API_BASE_URL } from "../config";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { handleLogin } = useUser();

    const handleSignUpSubmit = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                handleLogin(data.user.email); 
                navigate("/"); 
            } else {
                alert(data.message || "An error occurred.");
            }
        } catch (error) {
            console.error("Error signing up:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignUpSubmit();
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