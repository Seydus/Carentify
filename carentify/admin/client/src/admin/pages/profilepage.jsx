// src/ProfilePage.jsx
import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';

const ProfilePage = () => {
  const [profileName, setProfileName] = useState('John Doe');
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Perform any save/update action here
    setEditing(false);
  };

  const handleCancelClick = () => {
    // Reset the profile name to its original value
    setEditing(false);
  };

  const handleProfileNameChange = (event) => {
    setProfileName(event.target.value);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      {editing ? (
        <div>
          <TextField
            label="Profile Name"
            value={profileName}
            onChange={handleProfileNameChange}
          />
          <Button variant="contained" color="primary" onClick={handleSaveClick}>
            Save
          </Button>
          <Button variant="outlined" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="body1">{`Profile Name: ${profileName}`}</Typography>
          <Button variant="contained" color="primary" onClick={handleEditClick}>
            Edit Profile
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
