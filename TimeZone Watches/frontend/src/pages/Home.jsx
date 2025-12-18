import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(233, 30, 99, 0.7), rgba(233, 30, 99, 0.7)), url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0' }}>TimeZone Watches</h1>
          <p style={{ fontSize: '1.2rem', margin: '0 0 30px 0' }}>Discover premium watches from Titan, Sonata & Fastrack</p>
          <Link to="/products" style={{
            backgroundColor: 'white',
            color: '#e91e63',
            padding: '12px 30px',
            textDecoration: 'none',
            borderRadius: '25px',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>Shop Now</Link>
        </div>
      </div>

      {/* Featured Products */}
      <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>Featured Watches</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/products" style={{
          display: 'inline-block',
          marginTop: '40px',
          backgroundColor: '#e91e63',
          color: 'white',
          padding: '12px 30px',
          textDecoration: 'none',
          borderRadius: '25px',
          fontSize: '16px'
        }}>View All Watches</Link>
      </div>
    </div>
  );
};

export default Home;