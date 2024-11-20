import React from "react";
import { LandingPage } from "./LandingPage/LandingPage";
import { Search } from "./Search/Search";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
