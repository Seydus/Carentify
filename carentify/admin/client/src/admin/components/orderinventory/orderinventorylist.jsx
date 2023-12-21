import React, { useState } from "react";
import OrderListItem from "./orderlistitem";
import DialogContent from '@mui/material/DialogContent';
import OrderDetailsModal from "./orderdetailsmodel";

const items = [
  {
    id: "5ecb8a6d9f53bfae09e16115",
    invoiceNumber: "DEV-102",
    customer: {
      name: "Miron Vitold",
      address: "Street John Wick, no. 7, San Diego, USA",
    },
    date: new Date("2023-12-19"),
    // Add other item properties as needed
  },
  // Add more items as needed
];

function OrderInventoryList() {
  const [openModal, setOpenModal] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [showCarDetails, setShowCarDetails] = useState(false);

  const handleOpenModal = (item) => {
    setEditedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setShowCarDetails(false);
    setOpenModal(false);
  };

  const handleInputChange = (field, value) => {
    setEditedItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));
  };

  if(openModal)
  {
    return(
      <OrderDetailsModal 
        onClose={handleCloseModal} 
        open={openModal}
        data={editedItem} 
      />
    );
  }

  return (
    <div style={{ width: "100%" }}>
      {items.map((item) => (
        <OrderListItem
          key={item.id}
          item={item}
          onClick={() => handleOpenModal(item)}
        />
      ))}
    </div>
  );
}

export default OrderInventoryList;
