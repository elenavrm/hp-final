import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../../redux/booksSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const Filter = ({ category }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  const showToastMessage = () => {
    toast("Free shipping only for WIZZARDS!", {
        toastId: 'selectedCategory', 
        className: "custom-toast",
        autoClose: 5000,
    });
  };

  return (
    <div>
      <p
        onClick={() => {
          dispatch(filterCategory(category));
          showToastMessage();
        }}
        className={
          selectedCategory === category
            ? 'categoryButtonSelected categoryButton'
            : 'categoryButton'
        }
      >
        {category}
      </p>
    </div>
  );
}

export default Filter;
