import React from "react";
import { LandingPage } from "./LandingPage/LandingPage";
import { Search } from "./Search/Search";
import Login from "./LoginPage/Login";
import SignUp from "./SignUpPage/SignUp";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
