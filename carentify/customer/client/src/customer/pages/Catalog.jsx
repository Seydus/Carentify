import React from "react";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import CarTabRental from "../components/CarTabRental.jsx";
import CarCatalog from "../components/CarCatalog.jsx";
import { useParams } from "react-router-dom";

function InitialRent() {
  const {
    pickUplocation,
    dropOfflocation,
    pickUpDate,
    dropOffDate,
    pickUpTime,
    dropOffTime,
  } = useParams();
  return (
    <div>
      <NavigationBar />
      <section className="pt-12 pb-24 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <div className="py-6 space-y-6 flex justify-center">
            <CarTabRental />
          </div>
          <div className="mb-14 xl:mb-20 bg-white rounded-3xl">
            <div className="block w-full border-b border-gray-200 border-opacity-40">
              <CarCatalog />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default InitialRent;
