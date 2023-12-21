import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

function CarDetailsForm({ editedItem = {}, editMode, handleInputChange, handleEdit }) {
  const statusOptions = ["COMPLETE", "REJECTED", "PROCESSING"];
  const carNames = ["Car A", "Car B", "Car C", "Car D", "Car E"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCarName, setSelectedCarName] = useState(editedItem.name || "");
  const [pickupLocation, setPickupLocation] = useState(editedItem.pickupLocation || "");
  const [dropoffLocation, setDropoffLocation] = useState(editedItem.dropoffLocation || "");

  const handleOpenModalInternal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCarNameChange = (carName) => {
    setSelectedCarName(carName);
    handleInputChange("name", carName);
  };

  const renderTextField = (label, value, disabled, onChange, options = []) => (
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        {label === "Pick-up Location" || label === "Drop-off Location" ? (
          <Autocomplete
            options={options}
            value={value}
            disabled={disabled}
            onChange={(event, newValue) => onChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                disabled={disabled}
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        ) : (
          <TextField
            value={value}
            disabled={disabled}
            onChange={onChange}
            InputLabelProps={{ shrink: true }}
          />
        )}
      </FormControl>
    </Grid>
  );

  const renderCarNameDropdown = () => (
    <Grid item xs={6}>
      <FormControl fullWidth>
        <InputLabel>Car Name</InputLabel>
        <Select
          value={selectedCarName}
          onChange={(e) => handleCarNameChange(e.target.value)}
        >
          {carNames.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {renderTextField("ID", editedItem.id, true)}
        {renderTextField("Total Price", editedItem.price, !editMode, (e) => handleInputChange("price", e.target.value))}
        {renderTextField("Pick-up Location", pickupLocation, !editMode, (newValue) => setPickupLocation(newValue), carNames)}
        {renderTextField("Drop-off Location", dropoffLocation, !editMode, (newValue) => setDropoffLocation(newValue), carNames)}
        {renderTextField("Pick-up Date", editedItem.date.toLocaleString(), !editMode, (e) => handleInputChange("Pick-up Date", e.target.value))}
        {renderTextField("Drop-off Date", editedItem.date.toLocaleString(), !editMode, (e) => handleInputChange("Drop-off Date", e.target.value))}
        {renderCarNameDropdown()}
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={editedItem.status}
              disabled={!editMode}
              onChange={(e) => handleInputChange("status", e.target.value)}
            >
              {statusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleEdit}>
            {editMode ? "Save" : "Edit"}
          </Button>
        </Grid>
      </Grid>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: 400,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Car Details
          </Typography>
          <Typography variant="body1">Name: {editedItem.name}</Typography>
          <Typography variant="body1">Price: {editedItem.price}</Typography>
          <Typography variant="body1">Model: {editedItem.model}</Typography>
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default CarDetailsForm;
