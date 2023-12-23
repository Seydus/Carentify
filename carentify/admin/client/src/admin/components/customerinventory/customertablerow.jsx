import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const CustomerTableRow = ({ customer, handleDetailsClick }) => (
    <TableRow key={customer.fullname} className="bg-gray-100 hover:bg-gray-200 transition">
      <TableCell className="border-b border-gray-300 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              src={customer.img}
              alt="customer"
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
            />
          </div>
          <div className="ml-4">
            <div className="text-lg font-semibold">{customer.fullname}</div>
            <div className="text-gray-500 text-sm">{customer.email}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className="border-b border-gray-300 p-4">{customer.spent}</TableCell>
      <TableCell className="border-b border-gray-300 p-4">
        <Button
          onClick={() => handleDetailsClick(customer)}
          variant="contained"
          color="primary"
          size="small"
          className="focus:outline-none focus:ring focus:border-blue-300"
        >
          Details
        </Button>
      </TableCell>
    </TableRow>
);

export default CustomerTableRow;
