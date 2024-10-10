
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import BookList from './components/BookList';
import BookDetail from './components/BookDetails';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/" element={loggedIn ? <BookList /> : <Navigate to="/login" />} />
        <Route path="/book/:id" element={loggedIn ? <BookDetail /> : <Navigate to="/login" />} />
        <Route path="/cart" element={loggedIn ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/search" element={loggedIn ? <SearchBar /> : <Navigate to="/login" />} />
        <Route path="/checkout" element={loggedIn ? <Checkout /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
