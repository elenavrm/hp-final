import React, { useState } from 'react';
import './Books.css'; 

function Book({ book }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="container">
        <img src={book.image} alt="book cover" width="300px" />
      </div>
      <div className="container">
        <h2>{book.book}</h2>
      </div>
      <div className="container">
        <h3>
          {showMore
            ? book.description
            : book.description.substring(0, 111) + '...'}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'show less' : 'show more'}
          </button>
        </h3>
      </div>
    </div>
  );
}

function Books({ booksData }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousBook = () => {
    setCurrentIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = booksData.length - 1;
      }
      return newIndex;
    });
  };

  const nextBook = () => {
    setCurrentIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > booksData.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Wizzarding World Book Series</h1>
      </div>
      {booksData.map((element, index) => {
        const { id, name, books } = element;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{id} - {name}</h2>
            </div>
            <Book book={books[currentIndex]} />
            <div className="container buttonTwo">
              <button className="btnTwo" onClick={previousBook}>
                back
              </button>
              <button className="btnTwo" onClick={nextBook}>
                next
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Books;
