import React from "react";
import TextField from "@mui/material/TextField";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

const CarForm = ({
  makeAndModel,
  type,
  description,
  value,
  selectedFile,
  imagePreview,
  error,
  handleInputChange,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <TextField
          label="Make and Model"
          variant="outlined"
          value={makeAndModel}
          onChange={(e) => handleInputChange("makeAndModel", e.target.value)}
          error={error}
          helperText={error ? "Make and Model is required" : ""}
        />
        <TextField
          label="Type"
          variant="outlined"
          value={type}
          onChange={(e) => handleInputChange("type", e.target.value)}
          error={error}
          helperText={error ? "Type is required" : ""}
        />
      </div>
      <div style={{ width: "700px" }}>
        <h6>Description</h6>
        <TextField
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          value={description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          error={error}
          helperText={error ? "Description is required" : ""}
        />
      </div>
      <div>
        <h6>Image</h6>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleInputChange("selectedFile", e.target.files[0])}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: "100%", marginTop: "10px" }}
          />
        )}
      </div>
      <div>
        <h6>Pricing</h6>
        <CurrencyTextField
          label="Amount"
          variant="standard"
          value={value}
          currencySymbol="₱"
          outputFormat="string"
          onChange={(event, value) => handleInputChange("value", value)}
        />
      </div>
    </form>
  );
};

export default CarForm;
