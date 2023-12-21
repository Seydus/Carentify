import React from "react";
import { TableRow, TableCell, Button, Avatar } from "@mui/material";

const CarTableRow = ({ car, handleDetailsClick }) => {
  const getStatusColor = () => {
    return car.status === "In Stock" ? "text-green-500" : "text-red-500";
  };

  return (
    <TableRow className="hover:bg-gray-100 transition-all">
      <TableCell
        className="flex items-center space-x-2"
        component="th"
        scope="row"
      >
        <div className="flex items-center space-x-2">
          <Avatar
            alt={car.name}
            src={car.img}
            className="w-8 h-8 rounded-none"
          />
          <span className="text-gray-800 font-semibold">{car.name}</span>
        </div>
      </TableCell>
      <TableCell className="text-gray-800">
        ${car.price.toLocaleString()}
      </TableCell>
      <TableCell className="text-gray-800">{car.vin}</TableCell>
      <TableCell>
        <div className={`${getStatusColor()} font-semibold`}>{car.status}</div>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => handleDetailsClick(car)}
          className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded-full"
        >
          Details
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CarTableRow;
