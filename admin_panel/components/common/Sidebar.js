// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/car-management">Car Management</Link>
        </li>
        <li>
          <Link to="/reservation-management">Reservation Management</Link>
        </li>
        <li>
          <Link to="/user-management">User Management</Link>
        </li>
        {/* Add more links for other sections as needed */}
      </ul>
    </nav>
  );
};

export default Sidebar;
