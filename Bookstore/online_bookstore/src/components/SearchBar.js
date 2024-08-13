import React, { useState } from 'react';
import data from '../volumes.json';

import './SearchBar.css'; 
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    const fetchBooks = (query) => {
        try {
            
            const filteredBooks = data.items.filter(book =>
                book.volumeInfo.title.toLowerCase().includes(query.toLowerCase()) ||
                book.volumeInfo.authors?.some(author => author.toLowerCase().includes(query.toLowerCase()))
            );
            setBooks(filteredBooks);
            setError(null);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again.');
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchBooks(query);
    };

    return (
        <>
        
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for books"
                />
                <button type="submit">Search</button>
            </form>
                
            {error && <p>{error}</p>}
            {books.map(book => (
     
      <div className="book-item" key={book.id}>
        <Link to={`/book/${book.id}`}>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          <h3>{book.volumeInfo.title}</h3>
          <p>By {book.volumeInfo.authors?.join(', ')}</p>
        </Link>
        
      </div>
      
    ))}
        </div>
        
      
        </>
    );
};

export default SearchBar;

