import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="product-card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      width: '300px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      cursor: 'pointer'
    }}
    onClick={() => navigate(`/product/${product.id}`)}>
      <img 
        src={product.image} 
        alt={product.name}
        style={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <div style={{ padding: '0 8px' }}>
        <p style={{ color: '#e91e63', fontSize: '12px', fontWeight: 'bold', margin: '8px 0 4px 0' }}>
          {product.brand}
        </p>
        <h3 style={{ margin: '4px 0 8px 0', color: '#333', fontSize: '16px' }}>{product.name}</h3>
        <p style={{ color: '#666', fontSize: '13px', margin: '8px 0' }}>
          {product.description}
        </p>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', margin: '12px 0' }}>
          ₹{product.price.toLocaleString()}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        style={{
          backgroundColor: '#e91e63',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;