import { useState, useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useDebounce } from '../hooks/useDebounce';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const Products = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const debouncedSearch = useDebounce(searchTerm, 500);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (debouncedSearch) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    switch (sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    return result;
  }, [products, debouncedSearch, selectedCategory, priceRange, sortBy]);

  if (loading) return <div className="container">Loading products...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Products;