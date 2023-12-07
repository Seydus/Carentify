import React, { useState } from "react";
import SearchDropDown from "./SearchDropDown";
import locationPinImage from "../assets/location-pin.svg";
import calendarImage from "../assets/calendar.svg";
import clockImage from "../assets/clock.svg";

function TripSummary() {
  return (
    <div>
      <div
        className="flex flex-col bg-neutral-50 rounded-lg shadow-md"
        style={{ width: "300px" }}
      >
        <div>
          <div className="p-4">
            <label className="font-bold">Trip Info</label>
          </div>
          <div className="p-4 flex flex-col">
            <div className="justify-stretch space-y-4 mb-8">
              <SearchDropDown
                sharedValue={"Pick-up"}
                backgroundImage={locationPinImage}
              />
              <SearchDropDown
                sharedValue={"Drop-off"}
                backgroundImage={locationPinImage}
              />
            </div>
            <div className=" justify-stretch space-y-4 mb-8">
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
          <div className="p-4 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button className="active:scale-95 rounded bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
              Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripSummary;
