import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Invoice from "./invoice";

const CustomerDetailsModal = ({
  selectedCustomer,
  editMode,
  handleSaveClick,
  handleEditClick,
  handleCloseDetails,
  handleInvoiceClick,
}) => {
  const [editedCustomer, setEditedCustomer] = useState({
    fullname: selectedCustomer && selectedCustomer.fullname ? selectedCustomer.fullname : "",
    email: selectedCustomer && selectedCustomer.email ? selectedCustomer.email : "",
    phone: selectedCustomer && selectedCustomer.phone ? selectedCustomer.phone : "",
    // Add other fields you want to edit
  });
  

  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

  const handleOpenInvoice = () => {
    setIsInvoiceOpen(true);
  };

  const handleCloseInvoice = () => {
    setIsInvoiceOpen(false);
  };

  return (
    <>
      <Dialog open={selectedCustomer !== null} onClose={handleCloseDetails}>
        <DialogTitle>
          {editMode ? (
            <>
              <TextField
                label="Full Name"
                value={editedCustomer.fullname || (selectedCustomer && selectedCustomer.fullname) || ""}
                fullWidth
                onChange={(e) =>
                  setEditedCustomer({
                    ...editedCustomer,
                    fullname: e.target.value,
                  })
                }
              />
              <TextField
                label="Email"
                value={editedCustomer.email || (selectedCustomer && selectedCustomer.email) || ""}
                fullWidth
                onChange={(e) =>
                  setEditedCustomer({
                    ...editedCustomer,
                    email: e.target.value,
                  })
                }
              />
              <TextField
                label="Phone"
                value={editedCustomer.phone || (selectedCustomer && selectedCustomer.phone) || ""}
                fullWidth
                onChange={(e) =>
                  setEditedCustomer({
                    ...editedCustomer,
                    phone: e.target.value,
                  })
                }
              />
              {/* Add other fields for editing */}
            </>
          ) : (
            <>
              <DialogContentText>
                <strong>Name:</strong> {selectedCustomer && selectedCustomer.fullname ? selectedCustomer.fullname : "N/A"}
                <br />
                <strong>Email:</strong> {selectedCustomer && selectedCustomer.email ? selectedCustomer.email : "N/A"}
                <br />
                <strong>Phone Number:</strong>{" "}
                {selectedCustomer && selectedCustomer.phone ? selectedCustomer.phone : "N/A"}
                <br />
                <strong>Total Spent:</strong> {selectedCustomer && selectedCustomer.spent ? selectedCustomer.spent : "N/A"}
                <br />
              </DialogContentText>
              <DialogActions>
                {editMode ? (
                  <>
                    <Button onClick={handleSaveClick}>Save</Button>
                    <Button onClick={handleCloseDetails}>Cancel</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={handleEditClick}>Edit</Button>
                  </>
                )}
                <Button onClick={handleCloseDetails}>Close</Button>
              </DialogActions>
            </>
          )}
        </DialogTitle>
        {/* Recent Invoices Table */}
        <Typography variant="h6" sx={{ mt: 4 }}>
          Recent Invoices
        </Typography>
        <TableContainer sx={{ margin: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>DATE</TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>ACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Example rows, replace with actual data */}
              <TableRow>
                <TableCell>#528651571NT</TableCell>
                <TableCell>Dec 20, 2023</TableCell>
                <TableCell>1358.75</TableCell>
                <TableCell>PAID</TableCell>
                <TableCell>
                  <Button onClick={handleOpenInvoice}>View Details</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#311658671JR</TableCell>
                <TableCell>Dec 20, 2023</TableCell>
                <TableCell>1451.75</TableCell>
                <TableCell>UNPAID</TableCell>
                <TableCell>
                  <Button onClick={handleOpenInvoice}>View Details</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Dialog>

      {/* Invoice Modal */}
      <Dialog open={isInvoiceOpen} onClose={handleCloseInvoice}>
        <DialogTitle>Invoice</DialogTitle>
        <DialogContent>
          <Invoice />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInvoice}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomerDetailsModal;