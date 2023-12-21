// OrderDetailsModal.js
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import CarDetailsForm from './cardetailsform'; // Correct import path
import Button from '@mui/material/Button';

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    borderRadius: '15px',
    backgroundColor: '#f5f5f5',
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#1976d2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

function OrderDetailsModal({ open, onClose, data }) {
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (field, value) => {
    setEditedItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h5" component="div">
          Order Details
        </Typography>
      </DialogTitle>
      <DialogContent>
        <CarDetailsForm
          editedItem={data}
          editMode={editMode}
          handleInputChange={handleInputChange}
          handleEdit={handleEdit}
        />
      </DialogContent>
      <DialogActions>
        <Box m={2}>
          <StyledButton variant="contained" onClick={onClose}>
            Submit
          </StyledButton>
        </Box>
      </DialogActions>
    </StyledDialog>
  );
}

export default OrderDetailsModal;
