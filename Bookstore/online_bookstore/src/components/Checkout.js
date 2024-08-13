import React, { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');

  const handleCheckout = (event) => {
    event.preventDefault();
    alert('Your Order is Successfully Placed');
    alert(`Name: ${name}, Email: ${email}, Address: ${address}, Payment: ${payment}`);
  };

  return (
    <form className="checkout" onSubmit={handleCheckout}>
      <h2>Checkout</h2>
      <br />
      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Address:</label>
      <textarea
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <br />
      <br />
      <label>Payment Information:</label>
      <input
        type="numbers"
        placeholder="Credit card number, etc."
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
        required
      />
      <br />
      <br />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;
