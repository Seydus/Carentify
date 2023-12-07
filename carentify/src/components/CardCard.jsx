import React from "react";
import backgroundImage from "../assets/download.avif";

function CarCard() {
  return (
    <div className="inline-block pr-3">
      <div className="w-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <a href="#">
          <img
            className="rounded-t-lg w-full"
            src={backgroundImage}
            alt="Bogo City"
          />
        </a>
        <div className="p-4">
          <p className="mb-1 text-base font-semibold text-black">
            Jpark Island Resort & Waterpark
          </p>
          <p className="text-xs font-normal text-black">
            Maribago, Lapu-Lapu City, Cebu
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
