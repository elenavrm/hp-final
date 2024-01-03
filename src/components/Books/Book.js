import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import Cart from '../Cart/Cart'; 


const Book = ({ book }) => {
  const [showMore, setShowMore] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ book, quantity: 1 })); 
    toggleCart();
  };

  return (
    <div>
      <div className="container">
        <img src={book.image} className='book-cover' alt="book cover" width="300px" />
      </div>
      <div className="container">
        <h2 className='main-book'>{book.name}</h2>
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
      <div>
      <div className='container'>
        <h3 className="price">$ {book.price.toFixed(2)}</h3>
      </div>
      <div className='container'>
        <button className='add-btn' onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
      <div className='container'>
        <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      </div>
    </div>
    </div>
  );
};

export default Book;
