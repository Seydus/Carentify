import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import SearchDropDown from "./SearchDropDown";
import SearchDropTime from "./SearchDropTime";
import SearchDropCalendar from "./SearchDropCalendar";
import { Link } from "react-router-dom";

import locationPinImage from "../assets/location-pin.svg";
import calendarImage from "../assets/calendar.svg";
import clockImage from "../assets/clock.svg";

function InputCarInformation() {
  const { carData, updateCarData } = useContext(AppContext);

  return (
    <div className="flex items-center justify-center">
      <div className="mb-10 w-4/5">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mt-4">
            <div className="flex flex-col">
              <div className="mb-5 text-lg">
                <label className="font-semibold">Start Booking!</label>
              </div>
              <div className="grid grid-flow-col justify-stretch space-x-4 mb-6">
                <div className="flex flex-col">
                  <label className="font-semibold">Pick-up Location</label>
                  <SearchDropDown
                    sharedValue="pickUpLocation"
                    onDataChange={(value) =>
                      updateCarData({ pickUpLocation: value })
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">Drop-off Location</label>
                  <SearchDropDown
                    sharedValue="dropOffLocation"
                    onDataChange={(value) =>
                      updateCarData({ dropOffLocation: value })
                    }
                  />
                </div>
              </div>
              <div className="grid grid-flow-col justify-stretch space-x-4 mb-8">
                <div>
                  <label className="font-semibold">Pick-up Date</label>
                  <SearchDropCalendar
                    sharedValue="pickUpDate"
                    onDataChange={(value) =>
                      updateCarData({ pickUpDate: new Date(value) })
                    }
                  />
                </div>
                <div>
                  <label className="font-semibold">Drop-off Date</label>
                  <SearchDropCalendar
                    sharedValue="dropOffDate"
                    onDataChange={(value) =>
                      updateCarData({ dropOffDate: new Date(value) })
                    }
                  />
                </div>
                <div>
                  <label className="font-semibold">Pick-up Time</label>
                  <SearchDropTime
                    sharedValue="pickUpTime"
                    onDataChange={(value) =>
                      updateCarData({ pickUpTime: value })
                    }
                  />
                </div>
                <div>
                  <label className="font-semibold">Drop-off Time</label>
                  <SearchDropTime
                    sharedValue="dropOffTime"
                    onDataChange={(value) =>
                      updateCarData({ dropOffTime: value })
                    }
                  />
                </div>
              </div>
              <div className="flex place-content-end">
                <Link
                  to={`/catalog/${carData.pickUplocation}/${carData.dropOfflocation}/${carData.pickUpDate}/${carData.dropOffDate}/${carData.pickUpTime}/${carData.dropOffTime}`}
                >
                  <button className="text-white w-32 h-11 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Select
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputCarInformation;
