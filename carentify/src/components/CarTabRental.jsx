import React from "react";

function CarTabRental() {
  return (
    <div className="CarTabRental">
      <div
        className="bg-neutral-100 flex items-center justify-evenly px-4 py-2 rounded-t-lg"
        style={{ width: "64rem", height: "60px" }}
      >
        <button className="bg-neutral-50 drop-shadow-md text-neutral-700 font-semibold px-3 py-1 rounded-lg">
          Information
        </button>

        <button className="bg-neutral-50 drop-shadow-md text-neutral-700 font-semibold px-3 py-1 rounded-lg">
          Options
        </button>
        <button className="bg-neutral-50 drop-shadow-md text-neutral-700 font-semibold px-3 py-1 rounded-lg">
          Details
        </button>
        <button className="bg-neutral-50 drop-shadow-md text-neutral-700 font-semibold px-3 py-1 rounded-lg">
          Confirmation
        </button>
      </div>
    </div>
  );
}

export default CarTabRental;
