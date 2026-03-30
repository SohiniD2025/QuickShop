import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Navbar = () => {
  const { getCartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">QuickShop</Link>
        <div className="nav-links">
          <Link to="/products">Home</Link>
          <Link to="/wishlist" className="nav-icon">
            <FaHeart />
          </Link>
          <Link to="/cart" className="nav-icon">
            <FaShoppingCart />
            {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;