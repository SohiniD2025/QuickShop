import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = products.find((p) => p.id === parseInt(id));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container product-details">
      <div className="product-gallery">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <img src={product.image} alt={product.title} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>
        <p className="rating">Rating: {product.rating?.rate} / 5</p>
        <p className="description">{product.description}</p>
        <div className="actions">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            aria-pressed={isInWishlist(product.id)}
          >
            {isInWishlist(product.id)
              ? '❤️ Remove from Wishlist'
              : '🤍 Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;