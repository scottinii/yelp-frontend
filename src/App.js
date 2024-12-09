import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import Login from "./LoginPage/Login";
import Reviews from "./ReviewPage/Reviews";
import { Search } from "./Search/Search";
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
  
  const handleReviews = () => {
    console.log("Reviews handled!");
  };


    return (
      <UserProvider>
        <Routes>
            <Route path="/search" element={<Search signedInUser={signedInUser} handleLogout={handleLogout}/>} />
            <Route path="/" element={<LandingPage signedInUser={signedInUser} handleLogout={handleLogout} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
            <Route path="/review" element={<Reviews onReviews={handleReviews} />} />
        </Routes>
      </UserProvider>
    );
}