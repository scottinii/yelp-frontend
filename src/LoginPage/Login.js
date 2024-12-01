import React, { useState } from "react";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const storedPassword = Cookies.get(username);
        if (storedPassword && storedPassword === password) {
            alert("Login successful! Welcome back.");
            setUsername("");
            setPassword("");
        } else {
            alert("Invalid username or password.");
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;