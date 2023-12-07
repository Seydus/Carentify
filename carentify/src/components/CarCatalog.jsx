import React from "react";
import CarInfo from "./CarInfo.jsx";
import CarFilter from "./CarFilter.jsx";
import TripSummary from "./TripSummary.jsx";

function CarCatalog() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-grow items-center justify-center flex-col">
          <div class="flex flex-col place-items-end max-w-screen-lg w-full space-y-10 mb-6">
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
      </div>
    </div>
  );
}

export default CarCatalog;
