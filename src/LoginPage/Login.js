import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; 
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { handleLogin } = useUser(); 

    const handleLoginSubmit = () => {
        const storedPassword = Cookies.get(email);

        if (!storedPassword) {
            alert("No account found with this email. Please sign up.");
            return;
        }

        if (storedPassword === password) {
            Cookies.set("signedInUser", email, { expires: 0 });
            handleLogin(email); 
            navigate("/"); 
        } else {
            alert("Invalid email or password.");
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