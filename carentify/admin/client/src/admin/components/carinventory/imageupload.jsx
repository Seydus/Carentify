import React from "react";

const ImageUpload = ({ handleInputChange, selectedFile, imagePreview }) => {
  return (
    <div>
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
  );
};

export default ImageUpload;
