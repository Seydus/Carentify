// src/components/ShoppingCartCard.js
import React from 'react';

const ShoppingCartCard = () => {
  return (
    <div style={{ width: '40%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Shopping Cart</h2>
      {/* Product List */}
      <ul>
        <li>
          Product Name
          <span style={{ marginLeft: '10px' }}>Color: Blue</span>
        </li>
        {/* Add more product items as needed */}
      </ul>
      {/* Total Price */}
      <div style={{ marginTop: '20px' }}>
        Total Price: $100.00 {/* Replace with your actual total */}
      </div>
    </div>
  );
};

export default ShoppingCartCard;
