import React from 'react';

const BookItem = ({ book, addToCart }) => {
  const { volumeInfo } = book;
  const { title, authors, imageLinks } = volumeInfo;

  return (
    <div className="book-item">
      {imageLinks && imageLinks.thumbnail ? (
        <img src={imageLinks.thumbnail} alt={title} />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
      <h3>{title}</h3>
      <p>By: {authors ? authors.join(', ') : 'Unknown Author'}</p>
      <Link to={`/book/${book.id}`}>Details</Link><br/>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookItem;

