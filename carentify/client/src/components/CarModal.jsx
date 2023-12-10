import React from "react";

function CarModal({ isOpen, closeModal }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      } z-50`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 z-50">
        <h2 className="text-2xl font-bold mb-4">Pick-up</h2>
        <p className="text-gray-700 mb-4">Modal content goes here...</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 ${
          isOpen ? "" : "hidden"
        } z-40`}
      ></div>
    </div>
  );
}

export default CarModal;
