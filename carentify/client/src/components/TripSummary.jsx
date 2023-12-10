import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function TripSummary() {
  const { carData, updateCarData } = useContext(AppContext);

  return (
    <div
      className="p-6 rounded-lg shadow-md space-y-4"
      style={{ width: "300px" }}
    >
      <div>
        <div className="mb-4">
          <label className="text-4xl font-semibold">Information</label>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="space-y-5">
            <div className="space-y-2 flex flex-col">
              <label className="font-semibold">Pick-up Location</label>
              {carData.pickUpLocation}
            </div>
            <div div className="space-y-2 flex flex-col">
              <label className="font-semibold">Drop-off Location</label>
              {carData.dropOffLocation}
            </div>
          </div>
          <div className="space-y-5">
            <div div className="space-y-2 flex flex-col">
              <label className="font-semibold">Pick-up Date</label>
              {carData.pickUpDate}
            </div>
            <div div className="space-y-2 flex flex-col">
              <label className="font-semibold">Drop-off Date</label>
              {carData.dropOffDate}
            </div>
            <div div className="space-y-2 flex flex-col">
              <label className="font-semibold">Pick-up Time</label>
              {carData.pickUpTime}
            </div>
            <div div className="space-y-2 flex flex-col">
              <label className="font-semibold">Drop-off Time</label>
              {carData.dropOffTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripSummary;
