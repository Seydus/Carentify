import React from "react";

function BookingNumberAndPriceSummary() {
  return (
    <div
      className="flex drop-shadow-md bg-neutral-50 rounded-lg min-w-0 p-7 space-x-12"
      style={{ width: "280px" }}
    >
      <div className="flex flex-col items-center text-xl">
        <div>
          <label className="font-normal">Your booking number is</label>
        </div>
        <div>
          <label className="font-bold">PH123456567</label>
        </div>
      </div>
    </div>
  );
}

export default BookingNumberAndPriceSummary;
