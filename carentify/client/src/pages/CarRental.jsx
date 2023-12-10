import React from "react";
import NavigationBar from "../components/NavigationBar.jsx";
import InputCarInformation from "../components/InputCarInformation.jsx";
import HeaderImage from "../components/HeaderImage.jsx";
import Footer from "../components/Footer.jsx";

function CarRental() {
  return (
    <div className>
      <NavigationBar />
      <HeaderImage />
      <InputCarInformation />
      <Footer />
    </div>
  );
}

export default CarRental;
