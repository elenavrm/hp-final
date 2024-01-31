import React, { useState, useEffect } from 'react';
import Book from './Book';
import data from './data';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/booksSlice';
import './styles.css';
import AllCategories from '../Filter/AllCategories';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const filteredData = selectedCategory === 'ALL BOOKS' ? data : data.filter((element) => element.category === selectedCategory);

  return (
    <div>
    <ToastContainer position="top-right"/>
      <div className="container">
        <h1>Wizarding World Library</h1>
      </div>

      <hr /> 
      <div className='container'>
        <AllCategories />
      </div>
      <hr />
      {filteredData.map((element, id) => {
        const { name, books } = element;
        
        return (
          <div key={id}>
            <div className='container'>
              <h2>{name}</h2>
            </div>
            <Book key={id}  book={books[currentIndex[id]]} />
            <div className="btn container">
              <button className="btnOne" onClick={() => previousBook(id)}>
                back
              </button>
              <button className="btnOne" onClick={() => nextBook(id)}>
                next
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
