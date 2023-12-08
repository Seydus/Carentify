// src/components/CartPage.js
import React from 'react';
import MenuBar from './MenuBar';
import ShoppingCartCard from './ShoppingCartCard';
import PaymentInfoCard from './PaymentInfoCard';
import Footer from './Footer';

const CartPage = () => {
  return (
    <div>
      <MenuBar />
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <ShoppingCartCard />
        <PaymentInfoCard />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
