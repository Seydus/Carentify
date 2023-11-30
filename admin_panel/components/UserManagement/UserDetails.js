// UserDetails.js
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>User ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>No user details available.</p>
      )}
    </div>
  );
};

export default UserDetails;
