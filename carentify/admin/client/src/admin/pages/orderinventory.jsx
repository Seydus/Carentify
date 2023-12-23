import React from "react";
import OrderInventoryList from "../components/orderinventory/orderinventorylist";

function OrderInventory() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-white p-8 rounded w-full max-w-screen-lg">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-6">
          Order Inventory
        </h1>
        <OrderInventoryList />
      </div>
    </div>
  );
}

export default OrderInventory;
