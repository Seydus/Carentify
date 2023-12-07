import React, { useState } from "react";
import CarModal from "./CarModal";

function SearchDropDown({ sharedValue, backgroundImage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col space-y-1">
        <label
          htmlFor={sharedValue}
          className="text-stone-600 text-sm font-medium"
        >
          {sharedValue}
        </label>
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex space-x-2 items-center text-white bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img
            className="w-4 h-4 fill-sky-400"
            src={backgroundImage}
            alt="Description of the SVG image"
          />
        </button>
      </div>

      <CarModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default SearchDropDown;
