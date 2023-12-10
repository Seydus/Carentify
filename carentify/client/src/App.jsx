// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarRental from "./pages/CarRental";
import Catalog from "./pages/Catalog";
import ConfirmInformation from "./pages/ConfirmInformation";
import Details from "./pages/Details";
import Invoice from "./pages/Invoice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarRental />} />
        <Route
          path="/catalog/:pickUplocation/:dropOfflocation/:pickUpDate/:dropOffDate/:pickUpTime/:dropOffTime"
          element={<Catalog />}
        />

        <Route
          path="/confirm-information/:pickUplocation/:dropOfflocation/:pickUpDate/:dropOffDate/:pickUpTime/:dropOffTime/:price/:vehicleID/:vehicleMake/:vehicleType/:transmission/:passengerAmount"
          element={<ConfirmInformation />}
        />
        <Route
          path="/details/:pickUplocation/:dropOfflocation/:pickUpDate/:dropOffDate/:pickUpTime/:dropOffTime/:price/:vehicleID/:vehicleMake/:vehicleType/:transmission/:passengerAmount"
          element={<Details />}
        />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;
