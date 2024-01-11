import data from "../Books/data";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import deleteIcon from './delete.png';

const CartItem = ({ cartItem }) => {
    const book = data.find(category => category.books.some(book => book.id === cartItem.bookId));
    const dispatch = useDispatch();

    if (!book) {
        return null;
    }

    const selectedBook = book.books.find(book => book.id === cartItem.bookId);

    if (!selectedBook) {
        return null;
    }

    return (
        <div>
          <div className="container">
            <p>{selectedBook.name}</p>
          </div>
          <div className="container">
            <p>{cartItem.quantity} book(s)</p>
          </div>
          <div className="container">
            <p className="book-price">Price: ${(selectedBook.price * cartItem.quantity).toFixed(2)}</p>
          </div>
          <div className="container">
            <span onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
                <img className="icon" src={deleteIcon} alt="delete icon" />
            </span>
          </div>
        </div>
    );
};

export default CartItem;
