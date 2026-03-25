import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to QuickShop</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </div>
    </div>
  );
};

export default Home;