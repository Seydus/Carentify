import React from "react";
import primaryImage from "../assets/primary.avif";
import pickUpImage from "../assets/location-pin.svg";

function GroupTab() {
  return (
    <div
      className="flex drop-shadow-md bg-neutral-50 rounded-lg min-w-0"
      style={{ width: "650px" }}
    >
      <div className="flex flex-col space-y-10 p-5" style={{ width: "200px" }}>
        <div>
          <label className="font-bold text-2xl">Economy</label>
          <p className="font-thin text-base">Hyundai Accent or similar</p>
        </div>
        <div>
          <img src={primaryImage} alt="Italian Trulli"></img>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-4 h-4" src={pickUpImage} alt="Italian Trulli"></img>
          <div>
            <label className="text-xs">Pick-Up Location:</label>
            <p className="font-semibold text-xs">In Terminal</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end space-y-10 p-5">
        <div className="grid grid-cols-2 gap-y-5 gap-x-16 text-lg">
          <div class="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label className="text-md">5 Seats</label>
          </div>
          <div class="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label>Unlimited Mileage</label>
          </div>
          <div class="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label>2 Bags</label>
          </div>
          <div class="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label>Full to Full</label>
          </div>
          <div class="flex items-center space-x-2">
            <img
              className="w-4 h-4"
              src={pickUpImage}
              alt="Italian Trulli"
            ></img>
            <label>Automatic</label>
          </div>
        </div>
        <div className="flex justify-end font-semibold">
          <a className="underline" href="#">
            More details
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end space-y-7 p-5">
        <label className="text-2xl font-semibold">127,201.11 ₱</label>
        <button className="text-white w-32 h-11 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Select
        </button>
      </div>
    </div>
  );
}

export default GroupTab;
