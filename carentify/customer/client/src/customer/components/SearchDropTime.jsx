import React, { useState } from "react";

function SearchDropTime({ sharedValue, onDataChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onDataChange(newValue);
  };

  return (
    <div>
      <input
        type="time"
        id={sharedValue}
        value={inputValue}
        onChange={handleInputChange}
        className="flex space-x-2 h-10 items-center text-black bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchDropTime;
