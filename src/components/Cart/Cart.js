import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from './CartItem';
import ChangeQuantity from './ChangeQuantity';
import snitch from './snitch_wings_up.png';
import './Modal.css';

const Cart = ({ isOpen, toggleCart }) => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  if (!isOpen) return null;

  return (
    <div>
      <div className="overlay" onClick={toggleCart} />
      <div className="cart-modal">
        <div className="closed-btn" onClick={toggleCart}>
          <span>&times;</span>
        </div>
        <div className='container'>
        <h1>Your Cart</h1>
        </div>
        <hr className='divider' />
        {cartItems.length === 0 ? (
            <div>
            <div className='container'>
          <h4 className='g-total'>Your Cart Is Empty...</h4>
            </div>
            <div className='container'>
          <img className='snitch' src={snitch} alt='Sparkles' />
            </div>
            </div>
        ) : (
          <div>
          <div className='container'>
            <h4 className='g-total'>GRAND TOTAL: ${totalPrice.toFixed(2)}</h4>
          </div>
            <hr className='divider' />
            {cartItems.map((cartItem) => (
              <div key={cartItem.id}>
                <CartItem cartItem={cartItem} />
                <div>
                  <ChangeQuantity cartItem={cartItem} />
                </div>
              </div>
            ))}
          </div>
        )}
          <div className='container'>
        <button className='btn-shopping' onClick={toggleCart}>CONTINUE SHOPPING</button>
          </div>
        {cartItems.length !== 0 && (
          <div className='container'>
            <button className='checkout'>CHECKOUT</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;