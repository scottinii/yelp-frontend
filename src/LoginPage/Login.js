import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useUser } from "../UserContext"; 
import "./Login.css";
import { API_BASE_URL } from "../config";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { handleLogin } = useUser();

    const handleLoginSubmit = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                Cookies.set("signedInUser", email, { expires: 1 }); 
                handleLogin(email); 
                navigate("/");
            } else {
                alert(data.message); 
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("An error occurred while trying to log in. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLoginSubmit();
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;