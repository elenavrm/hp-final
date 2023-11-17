import React, { useState, useEffect } from 'react';
import './styles.css';
import { BooksData } from './BooksData';

function Book({ book }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="container">
        <img src={book.image} 
        className='book-cover' 
        alt="book cover" 
        width="250px" />
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
}

function Books() {
  const [currentIndex, setCurrentIndex] = useState(Array(BooksData.length).fill(0));

  const previousBook = (seriesIndex) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[seriesIndex] = newIndex[seriesIndex] ? newIndex[seriesIndex] - 1 : BooksData[seriesIndex].books.length - 1;
      return newIndex;
    });
  };

  const nextBook = (seriesIndex) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[seriesIndex] = newIndex[seriesIndex] === BooksData[seriesIndex].books.length - 1 ? 0 : newIndex[seriesIndex] + 1;
      return newIndex;
    });
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#000';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Wizarding World Book Series</h1>
      </div>
      {BooksData.map((element, index) => {
        const { id, name, books } = element;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{name}</h2>
            </div>
            <Book book={books[currentIndex[index]]} />
            <div className="btn container">
              <button className="btnOne" onClick={() => previousBook(index)}>
                back
              </button>
              <button className="btnOne" onClick={() => nextBook(index)}>
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
