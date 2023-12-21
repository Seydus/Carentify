// src/components/CarInventory.js
import React, { useState } from "react";
import CarInventoryTable from "../components/carinventory/carinventorytable";
import CreateCar from "./createcar";

function CarInventory() {
  const [currentComponent, setCurrentComponent] = useState(
    "car-inventory-table"
  );

  const handleButtonClick = () => {
    setCurrentComponent("create-car");
  };

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white p-8 rounded-md shadow-md">
        {currentComponent === "car-inventory-table" && (
          <div>
            <h2 className="pl-4 text-3xl font-semibold mb-6">Car Inventory</h2>

            <div className="flex pl-4 items-center mb-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={handleButtonClick}
              >
                Add New Car
              </button>
            </div>

            <CarInventoryTable />
          </div>
        )}

        {currentComponent === "create-car" && (
          <div>
            <CreateCar />
          </div>
        )}
      </div>
    </div>
  );
}

export default CarInventory;
