// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', borderTop: '1px solid #ccc', padding: '10px' }}>
      <div>
        {/* Website Name */}
        Carentify
      </div>
      <div>
        {/* Footer Options */}
        <span style={{ marginRight: '20px' }}>Help</span>
        <span style={{ marginRight: '20px' }}>FAQs</span>
        <span style={{ marginRight: '20px' }}>Customer</span>
        <span style={{ marginRight: '20px' }}>How-To Guide</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default Footer;
