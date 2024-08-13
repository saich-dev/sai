import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    alert('Cart cleared!');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((book, index) => (
            <div key={index}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.genre}</p>
              <p>{book.description}</p>
              <img src={book.imageLinks?.thumbnail} alt={book.title} />
            </div>
          ))}
          <Link to="/checkout">
            <button className ="btn btn-primary bt" >Proceed to Checkout</button>
          </Link>
          <button onClick={clearCart} className="btn btn-danger bt" >Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
