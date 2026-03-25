import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem/CartItem';

const Cart = () => {
  const { cartItems, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container empty-cart">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getCartTotal().toFixed(2)}</h3>
        <Link to="/checkout" className="btn">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;