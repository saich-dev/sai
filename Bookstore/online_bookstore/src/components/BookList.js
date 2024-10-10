import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=things', {
          params: {
            maxResults: 40
          }
        });
        setBooks(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div className="loading">Loading books...</div>;
  }
  return (
    <div className="book-list">
      {books.map(book => (
        <div className="book-item" key={book.id}>
          <Link to={`/book/${book.id}`}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <h3>{book.volumeInfo.title}</h3>
            <p>By {book.volumeInfo.authors?.join(', ')}</p>
          </Link>
          <br></br>
          <Link to={`/book/${book.id}`} type="button" className="btn btn-secondary sum">Details</Link>
          <Link to={`/book/${book.id}`}type="button" className="btn btn-secondary sum">Add to Cart</Link>
        </div>
        
      ))}
    </div>
  );
};

export default BookList;
