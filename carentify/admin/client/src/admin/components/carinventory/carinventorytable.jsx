import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import { TablePagination, TextField } from "@mui/material";
import CarTableRow from "./cartablerow";
import CarDetailsModal from "./cardetailsmodel";
import { TableRow, TableCell, Button, Avatar } from "@mui/material";

// Sample data (you can replace this with your actual data)
const rows = [
  { name: "Car1", price: 10000, vin: "VIN001", status: "In Stock" },
  { name: "Car2", price: 15000, vin: "VIN002", status: "Out of Stock" },
];

const CarInventoryTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedCar, setEditedCar] = useState(null);
  const [newPhoto, setNewPhoto] = useState(null);

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDetailsClick = (car) => {
    setSelectedCar(car);
    setEditMode(false);
    setEditedCar(null);
    setNewPhoto(null);
  };

  const handleEditClick = () => {
    setEditMode(true);
    setEditedCar({ ...selectedCar });
  };

  const handleSaveClick = () => {
    // Handle save logic here
    console.log("Saving changes:", editedCar);
    console.log("New photo:", newPhoto);

    // Update the rows array with the edited car details
    const updatedRows = rows.map((row) =>
      row.name === selectedCar.name ? editedCar : row
    );

    // Update the rows state with the modified data
    // (you might want to use a state management library for this in a real-world app)
    // setRows(updatedRows);

    // Close the modal and reset state
    handleCloseDetails();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setNewPhoto(file);
  };

  const handleCloseDetails = () => {
    setSelectedCar(null);
    setEditMode(false);
    setEditedCar(null);
    setNewPhoto(null);
  };

  return (
    <div className="p-4">
      <TextField
        label="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 ml-auto mr-4"
        style={{ marginBottom: "1rem" }}
      />

      <TableContainer component={Paper} className="mb-4">
        <Table className="min-w-full" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>VIN</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <CarTableRow
                  key={row.name}
                  car={row}
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
        className="mb-4"
      />

      <CarDetailsModal
        selectedCar={selectedCar}
        editMode={editMode}
        editedCar={editedCar}
        handleSaveClick={handleSaveClick}
        handleEditClick={handleEditClick}
        handleCloseDetails={handleCloseDetails}
        handlePhotoChange={handlePhotoChange}
      />
    </div>
  );
};

export default CarInventoryTable;
