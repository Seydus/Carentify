import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Signup from "./admin/pages/signup";
import Login from "./admin/pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
