import React from "react";
import CustomerInventoryTable from "../components/customerinventory/customerinventorytable";

function CustomerInventory() {
  return (
    <div className="p-8 rounded-lg">
      <div className="flex items-center justify-between mb-8">
        <div className="text-indigo-700">
          <h1 className="text-3xl font-extrabold mb-2">Customer Inventory</h1>
        </div>
      </div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <CustomerInventoryTable />
      </div>
    </div>
  );
}

export default CustomerInventory;
