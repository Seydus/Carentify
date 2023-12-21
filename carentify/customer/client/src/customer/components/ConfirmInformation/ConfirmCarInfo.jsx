import React, { useContext } from "react";
import primaryImage from "../../assets/primary.avif";
import pickUpImage from "../../assets/location-pin.svg";
import { AppContext } from "../../AppContext";

function ConfirmInformation() {
  const { carData } = useContext(AppContext);

  return (
    <div
      className="flex shadow rounded-lg p-5 justify-between items-center"
      style={{ width: "38rem" }}
    >
      <div>
        <div className="flex flex-col mb-5">
          <label className="font-bold text-xl">{carData.vehicleMake}</label>
          <p className="font-thin">{carData.vehicleType}</p>
        </div>
        <img className="w-44" src={primaryImage} alt="Italian Trulli"></img>
      </div>
      <div className="flex flex-col place-self-end items-center">
        <label className="place-self-end">Total fare:</label>
        <p className="text-2xl font-bold">{carData.price}</p>
      </div>
    </div>
  );
}

export default ConfirmInformation;
