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
          className="absolute inset-0 bg-black opacity-30 rounded-lg"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="flex flex-col w-1/2 ml-16 relative z-10">
          <h1 className="text-3xl font-bold text-white">
            Save instantly with Expedia Rewards
          </h1>
          <p className="text-white">
            You can enjoy access to perks like Member Prices, saving an average
            of 15% on thousands of hotels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
