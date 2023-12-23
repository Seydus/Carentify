import React from "react";

const CarDetailsModal = ({
  selectedCar,
  editMode,
  editedCar,
  setEditedCar,
  handleSaveClick,
  handleEditClick,
  handleCloseDetails,
  handlePhotoChange,
}) => {
  const renderCardContent = () => {
    if (editMode) {
      return (
        <div>
          <input
            type="text"
            placeholder="Make"
            value={editedCar.make}
            onChange={(e) =>
              setEditedCar({
                ...editedCar,
                type: e.target.value,
              })
            }
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Model"
            value={editedCar.model}
            onChange={(e) =>
              setEditedCar({
                ...editedCar,
                type: e.target.value,
              })
            }
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Type"
            value={editedCar.type}
            onChange={(e) =>
              setEditedCar({
                ...editedCar,
                type: e.target.value,
              })
            }
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <input
            type="number"
            placeholder="Price"
            value={editedCar.price}
            onChange={(e) =>
              setEditedCar({
                ...editedCar,
                price: e.target.value,
              })
            }
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="VIN"
            value={editedCar.vin}
            onChange={(e) =>
              setEditedCar({
                ...editedCar,
                vin: e.target.value,
              })
            }
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={editedCar.status}
              onChange={(e) =>
                setEditedCar({
                  ...editedCar,
                  status: e.target.value,
                })
              }
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="In Stock">Available</option>
              <option value="Out of Stock">Sold</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <textarea
            placeholder="Description"
            value={editedCar.description}
            onChange={(e) =>
              setEditedCar({
                ...editedCar,
                description: e.target.value,
              })
            }
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-4"
          />
        </div>
      );
    } else {
      return (
        <div className="text-center">
          <img
            alt={selectedCar.name}
            src={selectedCar.img} // Make sure 'img' is a valid property of 'selectedCar'
            className="mx-auto mb-4 rounded-full"
          />
          <p className="mb-2">Make: {selectedCar.make}</p>
          <p className="mb-2">Model: {selectedCar.model}</p>
          <p className="mb-2">Type: {selectedCar.type}</p>
          <p className="mb-2">Price: {selectedCar.price}</p>
          <p className="mb-2">VIN: {selectedCar.vin}</p>
          <div className="mb-2">
            <p>Status: {selectedCar.status}</p>
          </div>
          <p className="mb-10">Description: {selectedCar.description}</p>
        </div>
      );
    }
  };

  return (
    <div
      className={`fixed inset-0 overflow-y-auto ${
        selectedCar ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          {selectedCar && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Car Details
              </h2>
              {renderCardContent()}
              <div className="flex justify-center">
                {editMode && (
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-green-700"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                )}
                {!editMode && (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-blue-700"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700"
                  onClick={handleCloseDetails}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;
