import React, { useState } from 'react';
import './Books.css'; 

function Book({ book }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="container">
        <img src={book.image} alt="book cover" width="250px"/>
      </div>
      <div className="container">
        <h2>{book.book}</h2>
      </div>
      <div className="container">
        <h3>
          {showMore
            ? book.description
            : book.description.substring(0, 111) + '...'}
          <button  className="show-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'show less' : 'show more'}
          </button>
        </h3>
      </div>
    </div>
  );
}

function Books({ booksData }) {
  const [currentIndex, setCurrentIndex] = useState(Array(booksData.length).fill(0));

  const previousBook = (seriesIndex) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[seriesIndex] = (newIndex[seriesIndex] - 1 + booksData[seriesIndex].books.length) % booksData[seriesIndex].books.length;
      return newIndex;
    });
  };

  const nextBook = (seriesIndex) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[seriesIndex] = (newIndex[seriesIndex] + 1) % booksData[seriesIndex].books.length;
      return newIndex;
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Wizarding World Book Series</h1>
      </div>
      {booksData.map((element, index) => {
        const { id, name, books } = element;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{id} - {name}</h2>
            </div>
            <Book book={books[currentIndex[index]]} />
            <div className="container buttonTwo">
              <button className="btnTwo" onClick={() => previousBook(index)}>
                back
              </button>
              <button className="btnTwo" onClick={() => nextBook(index)}>
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
