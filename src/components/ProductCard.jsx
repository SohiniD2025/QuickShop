import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="rating">⭐ {product.rating?.rate}</p>
      </Link>
      <div className="card-actions">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={isInWishlist(product.id)}
          aria-label={
            isInWishlist(product.id)
              ? 'Remove from wishlist'
              : 'Add to wishlist'
          }
        >
          {isInWishlist(product.id) ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;