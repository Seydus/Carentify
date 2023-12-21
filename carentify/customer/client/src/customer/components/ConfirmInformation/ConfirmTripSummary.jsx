import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

function ConfirmTripSummary() {
  const { carData } = useContext(AppContext);

  return (
    <div
      className="shadow rounded-lg justify-between items-center overflow-hidden"
      style={{ width: "14rem", height: "16rem" }}
    >
      <div className="font-semibold bg-gray-50 px-5 py-3">
        <label>Trip Summary</label>
      </div>
      <div className="p-5">
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          <li class="mb-5 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time>
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                {carData.pickUpLocation}
              </p>
            </time>
            <p class="mb-1 text-base text-xs font-normal text-gray-500 dark:text-gray-400">
              {carData.pickUpDate}, {carData.pickUpTime}
            </p>
          </li>
          <li class="mb-5 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time>
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                {carData.dropOffLocation}
              </p>
            </time>
            <p class="mb-1 text-base text-xs font-normal text-gray-500 dark:text-gray-400">
              {carData.dropOffDate}, {carData.dropOffTime}
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ConfirmTripSummary;
