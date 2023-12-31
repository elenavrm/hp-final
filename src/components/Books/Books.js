import React, { useState, useEffect } from 'react';
import Book from './Book';
import data from './data';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/booksSlice";
import './styles.css';
import AllCategories from '../Filter/AllCategories';

const Books = () => {
  const [currentIndex, setCurrentIndex] = useState(Array(data.length).fill(0));
  const selectedCategory = useSelector(getSelectedCategory);

  useEffect(() => {
    setCurrentIndex(Array(data.length).fill(0));
  }, [selectedCategory]);

  const previousBook = (seriesIndex) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[seriesIndex] = newIndex[seriesIndex] ? newIndex[seriesIndex] - 1 : data[seriesIndex].books.length - 1;
      return newIndex;
    });
  };

  const nextBook = (seriesIndex) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = [...prevIndex];
      newIndex[seriesIndex] = newIndex[seriesIndex] === data[seriesIndex].books.length - 1 ? 0 : newIndex[seriesIndex] + 1;
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
        <h1>Wizarding World Library</h1>
      </div>
      <div className='container'>
        <AllCategories />
      </div>
      {data.map((element, index) => {
        const { id, name, books } = element;
        const showCategory = selectedCategory === 'ALL BOOKS' || selectedCategory === name;
        
        return (
          showCategory && (
            <div key={id}>
              <div className='container'>
                <h2>{name}</h2>
              </div>
              <Book book={books[currentIndex[index]]} />
              {showCategory && ( // Only render buttons if showCategory is true
                <div className="btn container">
                  <button className="btnOne" onClick={() => previousBook(index)}>
                    back
                  </button>
                  <button className="btnOne" onClick={() => nextBook(index)}>
                    next
                  </button>
                </div>
              )}
            </div>
          )
        );
      })}
    </div>
  );
};

export default Books;
