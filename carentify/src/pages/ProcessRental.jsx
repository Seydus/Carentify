import React from "react";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";
import CarInfo from "../components/CarInfo.jsx";
import CarFilter from "../components/CarFilter.jsx";
import TripSummary from "../components/TripSummary.jsx";
import CarTabRental from "../components/CarTabRental.jsx";

function InitialRent() {
  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-grow items-center justify-center flex-col">
          <div className="py-6 space-y-6">
            <CarTabRental />
          </div>
          <div class="flex flex-col place-items-end max-w-screen-lg w-full space-y-10 mb-6 bg-neutral-100 rounded">
            <div className="flex">
              {" "}
              <div className="py-6 space-y-6">
                <TripSummary />
                <CarFilter />
              </div>
              <div className="p-6 space-y-6">
                {" "}
                <CarInfo />
                <CarInfo />
                <CarInfo />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default InitialRent;
