import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from './CartItem';
import ChangeQuantity from './ChangeQuantity';
import './Modal.css';

const Cart = ({ isOpen, toggleCart }) => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  if (!isOpen) return null;

  return (
    <div>
      <div className="overlay" onClick={toggleCart} />
      <div className="cart-modal">
        <div className="close-btn" onClick={toggleCart}>
          <span>&times;</span>
        </div>
        <h1>Your Cart</h1>
        <hr className='divider' />

        {cartItems.length === 0 ? (
          <h4>Your Cart Is Empty...</h4>
        ) : (
          <div>
            <h4>GRAND TOTAL: ${totalPrice.toFixed(2)}</h4>
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

        <button className='btn' onClick={toggleCart}>CONTINUE SHOPPING</button>
        {cartItems.length !== 0 && (
          <div>
            <button className='checkout'>CHECKOUT</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;