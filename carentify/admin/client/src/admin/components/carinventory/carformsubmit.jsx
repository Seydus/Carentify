import React from "react";
import Typography from "@mui/material/Typography";

const CarFormSubmit = ({ error, warning }) => {
  return (
    <div>
      {warning && (
        <Typography variant="body2" color="error" mt={2}>
          {warning}
        </Typography>
      )}
      <button type="submit">Submit</button>
    </div>
  );
};

export default CarFormSubmit;
