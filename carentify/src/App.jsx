// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarRental from "./pages/CarRental";
import Catalog from "./pages/Catalog";
import ConfirmInformation from "./pages/ConfirmInformation";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/confirm-information" element={<ConfirmInformation />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
