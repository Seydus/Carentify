import React from "react";
import primaryImage from "../../assets/primary.avif";
import pickUpImage from "../../assets/location-pin.svg";

function ConfirmInformation() {
  return (
    <div
      className="flex shadow rounded-lg p-5 justify-between items-center"
      style={{ width: "38rem" }}
    >
      <div>
        <div className="flex flex-col mb-5">
          <label className="font-bold text-xl">Intermediate</label>
          <p className="font-thin">Nissan Almera or similar</p>
        </div>
        <img className="w-44" src={primaryImage} alt="Italian Trulli"></img>
      </div>
      <div className="space-y-10">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label>Automatic</label>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label>Air Conditioning</label>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label>Bluetooth</label>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label>USA connection</label>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center px-2 text-xs text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            Important Information
          </button>
        </div>
      </div>
      <div className="flex flex-col place-self-end items-center">
        <label className="place-self-end">Total fare:</label>
        <p className="text-2xl font-bold">7877.50 P</p>
      </div>
    </div>
  );
}

export default ConfirmInformation;
