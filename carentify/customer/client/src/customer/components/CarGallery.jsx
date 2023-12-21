import React from "react";
import CarCard from "./CardCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarGallery() {
  return (
    <div className="flex items-center justify-center overflow-container">
      <div className="mb-10 w-4/5">
        <h3 className="mb-5 text-2xl font-semibold dark:text-black">
          {" "}
          Tailor Your Ideal Rental Experience
        </h3>
        <div className="flex overflow-x-auto pb-1 hide-scroll-bar">
          <div className="flex flex-nowrap">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarGallery;
