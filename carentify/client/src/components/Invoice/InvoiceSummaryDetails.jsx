import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import primaryImage from "../../assets/primary.avif";
import pickUpImage from "../../assets/location-pin.svg";

function InvoiceSummaryDetails() {
  const { carData, updateCarData } = useContext(AppContext);
  const { personalData, updatePersonalData } = useContext(AppContext);

  return (
    <div
      className="flex drop-shadow-md bg-neutral-50 rounded-lg min-w-0 p-7 space-x-12"
      style={{ width: "650px" }}
    >
      <div className="flex flex-col space-y-8">
        <div>
          <label className="font-bold text-2xl">{carData.vehicleMake}</label>
          <p className="font-thin text-s">{carData.vehicleType}</p>
        </div>
        <div>
          <img className="w-44" src={primaryImage} alt="Italian Trulli"></img>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-5">
        <div className="space-y-5">
          <div>
            <label className="font-semibold">Pick-up</label>
            <p>
              {carData.pickUpLocation}, {carData.pickUpTime}
            </p>
          </div>
          <div>
            <label className="font-semibold">Drop-Off</label>
            <p>
              {carData.dropOffLocation}, {carData.dropOffTime}
            </p>
          </div>
        </div>
        <div>
          <label className="font-semibold">Customer Information</label>
          <p>
            {personalData.firstName} {personalData.lastName},{" "}
            {personalData.email}
          </p>
          <p>{personalData.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceSummaryDetails;
