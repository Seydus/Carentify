import React, { useContext } from "react";
import { AppContext } from "../AppContext";

import { Link } from "react-router-dom";
import primaryImage from "../assets/primary.avif";
import pickUpImage from "../assets/location-pin.svg";

function CarInfo({ key, data }) {
  const { carData } = useContext(AppContext);

  function handleClick() {
    carData.vehicleID = data.vehicleID;
    carData.vehicleMake = data.vehicleMake;
    carData.vehicleType = data.vehicleType;
    carData.transmission = data.transmission;
    carData.Seat_Capacity = data.Seat_Capacity;
    carData.price = data.price;
    console.log(data);
  }

  return (
    <div className="flex shadow rounded-lg min-w-0" style={{ width: "350px" }}>
      <div className="flex flex-col space-y-2 p-5" style={{ width: "200px" }}>
        <div>
          <label className="font-bold text-2xl">{data.vehicleMake}</label>
          <p className="font-thin text-base">{data.vehicleType}</p>
        </div>
        <div>
          <img src={primaryImage} alt="Italian Trulli"></img>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            {" "}
            <img
              className="w-3 h-3"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label className="text-xs">Pick-Up Location:</label>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3"></div>
            <p className="font-semibold text-xs">{carData.pickUpLocation}</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <label className="text-xs">{data.Seat_Capacity} passengers</label>
        </div>
      </div>
      <div className="flex flex-col flex-grow items-center justify-end space-y-2 p-5">
        <label className="text-2xl font-semibold">{data.price} ₱</label>
        <Link
          to={`/confirm-information/${carData.pickUplocation}/${carData.dropOfflocation}/${carData.pickUpDate}/${carData.dropOffDate}/${carData.pickUpTime}/${carData.dropOffTime}/${carData.price}/${carData.vehicleID}/${carData.vehicleMake}/${carData.vehicleType}/${carData.transmission}/${carData.passengerAmount}`}
        >
          <button
            className="text-white w-32 h-11 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleClick}
          >
            Select
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarInfo;
