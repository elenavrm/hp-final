import React, { useState } from 'react';

const Book = ({ book }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="container">
        <img src={book.image} className='book-cover' alt="book cover" width="300px" />
      </div>
      <div className="container">
        <h2 className='main-book'>{book.book}</h2>
      </div>
      <div className="container">
        <h3>
          {showMore
            ? book.description
            : book.description.substring(0, 111) + '...'}
          <button className="show-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'show less' : 'show more'}
          </button>
        </h3>
      </div>
    </div>
  );
};

export default Book;
