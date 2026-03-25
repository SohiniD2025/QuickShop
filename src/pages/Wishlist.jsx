import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard/ProductCard';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="container">
        <h2>Your wishlist is empty</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>My Wishlist</h2>
      <div className="product-grid">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;