import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  
  const categories = ['all', 'men', 'women', 'smart'];
  const brands = ['all', 'Titan', 'Sonata', 'Fastrack'];
  
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>Our Watch Collection</h1>
      
      {/* Category Filter */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <span style={{ alignSelf: 'center', marginRight: '10px', fontWeight: 'bold' }}>Category:</span>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '8px 16px',
              border: '2px solid #e91e63',
              backgroundColor: selectedCategory === category ? '#e91e63' : 'white',
              color: selectedCategory === category ? 'white' : '#e91e63',
              borderRadius: '20px',
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontSize: '14px'
            }}
          >
            {category === 'all' ? 'All Watches' : category === 'smart' ? 'Smart Watches' : `${category}'s Watches`}
          </button>
        ))}
      </div>

      {/* Brand Filter */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <span style={{ alignSelf: 'center', marginRight: '10px', fontWeight: 'bold' }}>Brand:</span>
        {brands.map(brand => (
          <button
            key={brand}
            onClick={() => setSelectedBrand(brand)}
            style={{
              padding: '8px 16px',
              border: '2px solid #333',
              backgroundColor: selectedBrand === brand ? '#333' : 'white',
              color: selectedBrand === brand ? 'white' : '#333',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {brand === 'all' ? 'All Brands' : brand}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <h3>No watches found for the selected filters</h3>
        </div>
      )}
    </div>
  );
};

export default Products;