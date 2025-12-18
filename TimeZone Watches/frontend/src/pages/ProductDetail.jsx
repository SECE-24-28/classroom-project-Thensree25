import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Product not found</div>;
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {/* Left - Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={product.image} 
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        {/* Right - Product Info */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <p style={{ color: '#e91e63', fontSize: '16px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
            {product.brand}
          </p>
          <h1 style={{ fontSize: '2rem', margin: '0 0 16px 0', color: '#333' }}>
            {product.name}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', margin: '0 0 24px 0' }}>
            ₹{product.price.toLocaleString()}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ color: '#333', marginBottom: '12px' }}>Key Features:</h3>
            <ul style={{ paddingLeft: '20px', color: '#666' }}>
              {product.highlights.map((highlight, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: '#e91e63',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                flex: '1'
              }}
            >
              Add to Cart
            </button>
            <button
              style={{
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                flex: '1'
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={{ marginTop: '40px', padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2 style={{ color: '#333', marginBottom: '16px' }}>Description</h2>
        <p style={{ color: '#666', lineHeight: '1.6' }}>{product.description}</p>
      </div>

      {/* Specifications */}
      <div style={{ marginTop: '24px', padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2 style={{ color: '#333', marginBottom: '16px' }}>Specifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #ddd' }}>
              <span style={{ fontWeight: 'bold', color: '#333' }}>{key}:</span>
              <span style={{ color: '#666' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div style={{ marginTop: '24px', padding: '24px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2 style={{ color: '#333', marginBottom: '16px' }}>Customer Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} style={{ 
            padding: '16px', 
            backgroundColor: 'white', 
            borderRadius: '6px', 
            marginBottom: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontWeight: 'bold', color: '#333' }}>{review.name}</span>
              <div>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: i < review.rating ? '#ffd700' : '#ddd' }}>★</span>
                ))}
              </div>
            </div>
            <p style={{ color: '#666', margin: 0 }}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;