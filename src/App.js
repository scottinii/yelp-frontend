import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { Search } from "./Search/Search";
import Login from "./LoginPage/Login";
import SignUp from "./SignUpPage/SignUp";
import { UserProvider } from "./UserContext";

export function App() {
    const [signedInUser, setSignedInUser] = useState(null);

    const handleLogin = (email) => {
        setSignedInUser(email);
    };

    const handleSignUp = (email) => {
        setSignedInUser(email);
    };

    const handleLogout = () => {
      setSignedInUser(null);
  };

    return (
      <UserProvider>
      <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<LandingPage signedInUser={signedInUser} handleLogout={handleLogout} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
      </Routes>
      </UserProvider>
    );
}