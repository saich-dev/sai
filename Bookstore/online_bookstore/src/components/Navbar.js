import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav>
      <ul>
        {loggedIn ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
