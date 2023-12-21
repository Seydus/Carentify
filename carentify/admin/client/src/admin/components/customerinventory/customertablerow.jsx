import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const CustomerTableRow = ({ customer, handleDetailsClick }) => (
  <TableRow key={customer.fullname}>
    <TableCell component="th" scope="row">
      <img src={customer.img} alt="customer" />
      {customer.fullname}
      {customer.email}
    </TableCell>
    <TableCell>{customer.spent}</TableCell>
    <TableCell>
      <Button onClick={() => handleDetailsClick(customer)}>Details</Button>
    </TableCell>
  </TableRow>
);

export default CustomerTableRow;
