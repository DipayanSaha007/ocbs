// src/components/Payment.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  const handlePayment = (method) => {
    // Implement payment logic here
    console.log('Selected payment method:', method);

    // Simulate successful payment and redirect
    setTimeout(() => {
      alert(`Payment successful with ${method}`);
      navigate('/dashboard');
    }, 500); // Simulate a delay for processing
  };

  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      <button onClick={() => handlePayment('UPI')} className="btn">Pay with UPI</button>
      <button onClick={() => handlePayment('Credit Card')} className="btn">Pay with Credit Card</button>
      <button onClick={() => handlePayment('Net Banking')} className="btn">Pay with Net Banking</button>
    </div>
  );
}

export default Payment;