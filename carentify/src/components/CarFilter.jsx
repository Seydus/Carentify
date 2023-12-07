import React from "react";
import customerImage from "../assets/location-pin.svg";

function CarFilter() {
  return (
    <div>
      <div
        className="flex flex-col bg-neutral-50 rounded-lg shadow-md"
        style={{ width: "300px", height: "330px" }}
      >
        <div className="p-4">
          <label className="font-bold">Filter</label>
        </div>

        <div className="p-4 space-y-7">
          <div>
            <div className="flex space-x-3 items-center mb-4">
              <img
                className="w-4 h-4"
                src={customerImage}
                alt="Italian Trulli"
              ></img>
              <label className="font-bold">Transmission</label>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                ></input>
                <span className="">Automatic</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                ></input>
                <span className="">Manual</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex space-x-3 items-center mb-4">
              <img
                className="w-4 h-4"
                src={customerImage}
                alt="Italian Trulli"
              ></img>
              <label className="font-bold">Passengers</label>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center justify-center space-x-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                <img
                  className="w-4 h-4"
                  src={customerImage}
                  alt="Italian Trulli"
                ></img>
                <span>1 - 4</span>
              </button>
              <button className="flex items-center justify-center space-x-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                <img
                  className="w-4 h-4"
                  src={customerImage}
                  alt="Italian Trulli"
                ></img>
                <span>4 - 8</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarFilter;
