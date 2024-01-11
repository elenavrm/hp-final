import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseCart, decreaseCart } from '../../redux/cartSlice';

const ChangeQuantity = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCart({ cartItemId: cartItem.id }));
  };

  const handleDecrease = () => {
    dispatch(decreaseCart({ cartItemId: cartItem.id }));
  };


  return (
    <div className='container'>
      <button className='quantity' onClick={handleIncrease}> + </button>
      <span className='number'> {cartItem.quantity} </span>
      <button className='quantity' onClick={handleDecrease}> - </button>
    </div>
  );
};

export default ChangeQuantity;