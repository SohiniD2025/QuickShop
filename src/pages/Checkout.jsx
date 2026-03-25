import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
});

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Order placed:', data);
    toast.success('Order placed successfully!');
    clearCart();
    navigate('/');
  };

  const tax = getCartTotal() * 0.1;
  const total = getCartTotal() + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container checkout-page">
        <h2>Checkout</h2>
        <p>Your cart is empty. Please add items before proceeding to checkout.</p>
        <button onClick={() => navigate('/products')} className="btn">Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="container checkout-page">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id}>
            {item.title} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
          </div>
        ))}
        <p>Subtotal: ${getCartTotal().toFixed(2)}</p>
        <p>Tax (10%): ${tax.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
        <input {...register('name')} placeholder="Full Name" />
        <p className="error">{errors.name?.message}</p>

        <input {...register('email')} placeholder="Email" />
        <p className="error">{errors.email?.message}</p>

        <textarea {...register('address')} placeholder="Shipping Address" />
        <p className="error">{errors.address?.message}</p>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;