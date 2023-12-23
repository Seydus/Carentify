import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from "@mui/material";
import CustomerTableRow from "./customertablerow";
import CustomerDetailsModal from "./customerdetailsmodel";

// Function to create data
function createData(img, fullname, email, phone, spent) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(spent);

  return { img, fullname, email, phone, spent: formattedPrice };
}

// Sample data
const rows = [
  createData(
    "https://via.placeholder.com/100",
    "John Doe",
    "john.doe@gmail.com",
    "123-456-7890",
    1358.75
  ),
  // Add more data as needed
];

const CustomerInventoryTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState(null);

  // Filtered rows based on search query
  const filteredRows = rows.filter((row) =>
    row.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Function to handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Function to handle details click
  const handleDetailsClick = (customer) => {
    setSelectedCustomer(customer);
    setEditMode(false);
    setEditedCustomer(null);
  };

  // Function to handle edit click
  const handleEditClick = () => {
    setEditMode(true);
    setEditedCustomer({ ...selectedCustomer });
  };

  // Function to handle save click
  const handleSaveClick = () => {
    console.log("Saving changes:", editedCustomer);
    // Handle save logic here

    // Update the rows array with the edited customer details
    const updatedRows = rows.map((row) =>
      row.fullname === selectedCustomer.fullname ? editedCustomer : row
    );

    // Update the rows state with the modified data
    // (you might want to use a state management library for this in a real-world app)
    // setRows(updatedRows);

    // Close the modal and reset state
    handleCloseDetails();
  };

  // Function to handle close details
  const handleCloseDetails = () => {
    setSelectedCustomer(null);
    setEditMode(false);
    setEditedCustomer(null);
  };

  // Function to handle invoice click
  const handleInvoiceClick = () => {
    // Handle invoice logic here
    console.log("Viewing invoice for customer:", selectedCustomer);
  };

  return (
    <div className="space-y-6 rounded-lg">
      <TextField
        label="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
      />

      <TableContainer component={Paper} className="bg-white rounded-md shadow-md">
        <Table sx={{ minWidth: 1050 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Spent</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <CustomerTableRow
                  key={row.fullname}
                  customer={row}
                  handleDetailsClick={handleDetailsClick}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="bg-white rounded-md shadow-md"
      />

      {/* Details Modal */}
      <CustomerDetailsModal
        selectedCustomer={selectedCustomer}
        editMode={editMode}
        editedCustomer={editedCustomer}
        handleSaveClick={handleSaveClick}
        handleEditClick={handleEditClick}
        handleCloseDetails={handleCloseDetails}
        handleInvoiceClick={handleInvoiceClick}
      />
    </div>
  );
};

export default CustomerInventoryTable;
