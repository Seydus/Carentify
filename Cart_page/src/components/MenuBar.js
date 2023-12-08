// src/components/MenuBar.js
import React from 'react';

const MenuBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        
        <span style={{ marginRight: '20px' }}>HOME</span>
        <span style={{ marginRight: '20px' }}>CATEGORIES</span>
        <span style={{ marginRight: '20px' }}>BLOG</span>
        <span>Contact</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Search Bar */}
        <input type="text" placeholder="Search" style={{ marginRight: '10px' }} />
        {/* Account Icon */}
        <span>Account Icon</span>
      </div>
    </div>
  );
};

export default MenuBar;
