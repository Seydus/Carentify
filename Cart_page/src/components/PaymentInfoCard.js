// src/components/PaymentInfoCard.js
import React, { useState } from 'react';

const PaymentInfoCard = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirmPayment = () => {
    // Handle payment confirmation logic
  };

  return (
    <div style={{ width: '40%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'purple' }}>
      <h2>Payment Information</h2>
      {/* Payment Method */}
      <div>
        <label>
          <input type="radio" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={() => handlePaymentMethodChange('creditCard')} />
          Credit Card
        </label>
        <label>
          <input type="radio" value="cashOnDelivery" checked={paymentMethod === 'cashOnDelivery'} onChange={() => handlePaymentMethodChange('cashOnDelivery')} />
          Cash on Delivery
        </label>
      </div>
      {/* Credit Card Details */}
      {paymentMethod === 'creditCard' && (
        <div style={{ marginTop: '20px' }}>
          <label>
            Cardholder Name:
            <input type="text" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
          </label>
          <label>
            Card Number:
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </label>
          <label>
            Expiration Date:
            <input type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
          </label>
        </div>
      )}
      {/* Confirm Payment Button */}
      <button onClick={handleConfirmPayment} style={{ marginTop: '20px' }}>
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentInfoCard;
