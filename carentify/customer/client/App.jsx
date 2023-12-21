// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarInventory from "./src/admin/pages/carinventory";

function App() {
  <Router>
    <Routes>
      <Route path="/admin/carinventory" element={<CarInventory />} />
    </Routes>
  </Router>;
}

export default App;
