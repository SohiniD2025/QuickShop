import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}/products`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE}/products/categories`);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE}/products/${id}`);
  return response.data;
};