import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBook(data.volumeInfo);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Book added to cart!');
  };

  return (
    <div className="book-detail">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      
      {book && !loading && !error && (
        <>
          <h1>{book.title}</h1>
          <h2>by {book.authors?.join(', ')}</h2>
          <img src={book.imageLinks?.thumbnail} alt={book.title} />
          <p>{book.description}</p>
          <p><strong>Genre:</strong> {book.categories?.join(', ')}</p>
          <p><strong>Published Date:</strong> {book.publishedDate}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default BookDetail;
