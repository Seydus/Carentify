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
      <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-white p-6 rounded-t-md shadow-md">
      {editMode ? (
        <EditDialogContent
          editedCustomer={editedCustomer}
          selectedCustomer={selectedCustomer}
          setEditedCustomer={setEditedCustomer}
        />
      ) : (
        <ViewDialogContent selectedCustomer={selectedCustomer} />
      )}
      <DialogActions className="mt-6">
        {editMode ? (
          <EditDialogActions
            handleSaveClick={handleSaveClick}
            handleCloseDetails={handleCloseDetails}
          />
        ) : (
          <ViewDialogActions handleEditClick={handleEditClick} handleCloseDetails={handleCloseDetails} />
        )}
      </DialogActions>
    </DialogTitle>
        {/* Recent Invoices Table */}
        <Typography variant="h6" sx={{ p: 4 }}>
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
      <TableRow className="hover:bg-gray-100 transition">
        <TableCell className="text-blue-500">#528651571NT</TableCell>
        <TableCell>Dec 20, 2023</TableCell>
        <TableCell className="text-green-500 font-semibold">1358.75</TableCell>
        <TableCell className="text-purple-800 font-semibold">PAID</TableCell>
        <TableCell>
          <Button onClick={handleOpenInvoice} variant="outlined" color="primary" size="small">
            View Details
          </Button>
        </TableCell>
      </TableRow>
      <TableRow className="hover:bg-gray-100 transition">
        <TableCell className="text-blue-500">#311658671JR</TableCell>
        <TableCell>Dec 20, 2023</TableCell>
        <TableCell className="text-red-500 font-semibold">1451.75</TableCell>
        <TableCell className="text-yellow-500 font-semibold">UNPAID</TableCell>
        <TableCell>
          <Button onClick={handleOpenInvoice} variant="outlined" color="primary" size="small">
            View Details
          </Button>
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

  function EditDialogContent({ editedCustomer, selectedCustomer, setEditedCustomer }) {
    return (
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
          className="mb-2"
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
          className="mb-2"
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
          className="mb-4"
        />
        {/* Add other fields for editing */}
      </>
    );
  }
  
  function ViewDialogContent({ selectedCustomer }) {
    return (
      <DialogContentText className="text-gray-700">
        <strong className="text-purple-600">Name:</strong>{" "}
        {selectedCustomer && selectedCustomer.fullname ? (
          <span className="text-black">{selectedCustomer.fullname}</span>
        ) : (
          "N/A"
        )}
        <br />
        <strong className="text-purple-600">Email:</strong>{" "}
        {selectedCustomer && selectedCustomer.email ? (
          <span className="text-black">{selectedCustomer.email}</span>
        ) : (
          "N/A"
        )}
        <br />
        <strong className="text-purple-600">Phone Number:</strong>{" "}
        {selectedCustomer && selectedCustomer.phone ? (
          <span className="text-black">{selectedCustomer.phone}</span>
        ) : (
          "N/A"
        )}
        <br />
        <strong className="text-purple-600">Total Spent:</strong>{" "}
        {selectedCustomer && selectedCustomer.spent ? (
          <span className="text-black">{selectedCustomer.spent}</span>
        ) : (
          "N/A"
        )}
        <br />
      </DialogContentText>
    );
  }
  
  function EditDialogActions({ handleSaveClick, handleCloseDetails }) {
    return (
      <>
        <Button
          onClick={handleSaveClick}
          className="mr-2 bg-green-500 text-white hover:bg-green-600"
        >
          Save
        </Button>
        <Button onClick={handleCloseDetails} className="text-yellow-500 hover:text-yellow-600">
          Cancel
        </Button>
      </>
    );
  }
  
  function ViewDialogActions({ handleEditClick, handleCloseDetails }) {
    return (
      <>
        <Button onClick={handleEditClick} className="text-blue-500 hover:text-blue-600">
          Edit
        </Button>
        <Button onClick={handleCloseDetails} className="text-red-500 hover:text-red-600">
          Close
        </Button>
      </>
    );
  };
}
export default CustomerDetailsModal;