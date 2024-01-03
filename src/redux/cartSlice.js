import { createSlice } from "@reduxjs/toolkit";
import data from '../components/Books/data';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                bookId: action.payload.book.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.book.price.toFixed(2)
            })
        },

        increaseCart: (state, action) => {
            const { cartItemId } = action.payload;
            const existingCartItem = state.cartItems.find(
              (cartItem) => cartItem.id === cartItemId
            );
          
            if (existingCartItem) {
              existingCartItem.quantity += 1;
              const book = data.find((item) => item.id === existingCartItem.bookId);
             existingCartItem.totalPrice = book.price * existingCartItem.quantity;
            }
          },
          
          decreaseCart: (state, action) => {
            const existingCartItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload.cartItemId
            );
        
            if (existingCartItem) {
                if (existingCartItem.quantity > 1) {
                    existingCartItem.quantity -= 1;
                    // accessing the book data to update totalPrice
                    const book = data.find((item) => item.id === existingCartItem.bookId);
                    existingCartItem.totalPrice = book.price * existingCartItem.quantity;
                } else {
                    // remove item if quantity is 1 or less
                    state.cartItems = state.cartItems.filter(
                        (cartItem) => cartItem.id !== action.payload.cartItemId
                    );
                }
            }
        },
        

        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}
export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, increaseCart, decreaseCart } = slice.actions;
export default slice.reducer;