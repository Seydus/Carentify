import React from "react";

import backgroundImage from "../assets/download.avif";

function HeaderImage() {
  return (
    <div className="flex items-center justify-center relative">
      <div className="my-10 h-96 w-4/5 rounded-lg flex items-center justify-start relative">
        <div
          className="absolute inset-0 bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-black opacity-70 rounded-lg"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="flex flex-col w-1/2 ml-16 relative z-10 space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Unlock Your Adventure, Rent with Confidence.
          </h1>
          <p className="text-white">
            Discover hassle-free car rentals with our wide selection of
            top-notch vehicles and seamless booking process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
