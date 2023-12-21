import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

function OrderListItem({ item, onClick }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "COMPLETE":
        return "green";
      case "REJECTED":
        return "red";
      case "PROCESSING":
        return "orange";
      default:
        return "gray";
    }
  };

  const month = item.dateInfo ? item.dateInfo.month : "";
  const day = item.dateInfo ? item.dateInfo.day : "";

  return (
    <ListItemButton
      key={item.id}
      component="div"
      style={{ width: "100%", display: "flex", alignItems: "center" }}
      onClick={onClick}
    >
      <Avatar>
        <div>{month}</div>
        <div>{day}</div>
      </Avatar>
      <div style={{ marginLeft: "16px", flex: 1 }}>
        <ListItemText
          primary={`Invoice Number: ${item.invoiceNumber}`}
          secondary={`Total Amount: $${
            item.totalAmount ? item.totalAmount.toFixed(2) : "N/A"
          }`}
          style={{ fontSize: "14px", fontWeight: "inherit" }}
        />
      </div>
      <div
        style={{
          marginLeft: "auto",
          fontSize: "14px",
          background: getStatusColor(item.status),
          color: "white",
          padding: "4px",
          borderRadius: "4px",
        }}
      >
        {item.status}
      </div>
    </ListItemButton>
  );
}

export default OrderListItem;
