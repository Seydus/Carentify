// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarRental from "./pages/CarRental";
import ProcessRental from "./pages/ProcessRental";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/process-rental" element={<ProcessRental />} />
      </Routes>
    </Router>
  );
}

export default App;
