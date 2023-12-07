import React, { useState } from "react";
import SearchDropDown from "./SearchDropDown";
import locationPinImage from "../assets/location-pin.svg";
import calendarImage from "../assets/calendar.svg";
import clockImage from "../assets/clock.svg";

function InputCarInformation() {
  return (
    <div className="flex items-center justify-center">
      <div className="mb-10 w-4/5">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mt-8">
            <div className="flex flex-col">
              <div className="grid grid-flow-col justify-stretch space-x-4 mb-6">
                <SearchDropDown
                  sharedValue={"Pick-up"}
                  backgroundImage={locationPinImage}
                />
                <SearchDropDown
                  sharedValue={"Drop-off"}
                  backgroundImage={locationPinImage}
                />
              </div>
              <div className="grid grid-flow-col justify-stretch space-x-4 mb-8">
                <SearchDropDown
                  sharedValue={"Pick-up Date"}
                  backgroundImage={calendarImage}
                />
                <SearchDropDown
                  sharedValue={"Drop-off Date"}
                  backgroundImage={calendarImage}
                />
                <SearchDropDown
                  sharedValue={"Pick-up Time"}
                  backgroundImage={clockImage}
                />
                <SearchDropDown
                  sharedValue={"Drop-off Time"}
                  backgroundImage={clockImage}
                />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
              Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputCarInformation;
