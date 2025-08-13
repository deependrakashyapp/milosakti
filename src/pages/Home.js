import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: '10₹',
      image: '🍅',
      category: 'Vegetables'
    },
    {
      id: 2,
      name: 'Fresh Strawberries',
      price: '10₹',
      image: '🍓',
      category: 'Fruits'
    },
    {
      id: 3,
      name: 'Organic Basil',
      price: '10₹',
      image: '🌿',
      category: 'Herbs'
    },
    {
      id: 4,
      name: 'Free-Range Eggs',
      price: '10₹',
      image: '🥚',
      category: 'Dairy'
    }
  ];

  const brandFeatures = [
    {
      icon: '🌾',
      title: 'Millet Products',
      description: 'High-quality millet-based products to combat malnutrition and provide essential nutrition.'
    },
    {
      icon: '🌿',
      title: 'Ayurvedic Heritage',
      description: '140-year legacy of Ayurvedic and natural products using traditional methods.'
    },
    {
      icon: '👥',
      title: 'Community Focus',
      description: 'Committed to ending malnutrition and empowering farmers and women\'s self-help groups.'
    },
    {
      icon: '🏆',
      title: 'Quality Legacy',
      description: 'Known as the "Father of Organics" with trusted quality since 1880.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Complete Hub of Organic,
                <span className="highlight"> Millets & Natural Products</span>
              </h1>
              <p className="hero-description">
                140-year-old trustworthy and quality-focused, Millo Shakti is committed to ending malnutrition 
                and providing economic empowerment to farmers and women's self-help groups.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Shop Now
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-visual">
                <div className="floating-item item-1">🥬</div>
                <div className="floating-item item-2">🍎</div>
                <div className="floating-item item-3">🥕</div>
                <div className="floating-item item-4">🍊</div>
                <div className="floating-item item-5">🥦</div>
                <div className="floating-item item-6">🍇</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Highlights Section */}
      <section className="brand-highlights section">
        <div className="container">
          <div className="brand-intro">
            <h2 className="section-title">Why Choose Millo Shakti?</h2>
            <p className="section-subtitle">
              140-year-old legacy of quality and trust. We're committed to ending malnutrition and building a healthy India.
            </p>
          </div>
          
          <div className="brand-story">
            <div className="brand-content">
              <h3>Our Legacy</h3>
              <p>
                Millo Shakti was founded by senior social worker and agri-entrepreneur Ritu Raj Bass. 
                Dr. Badri Prasad Bass established a supermarket around Bareilly Mandal in 1880, where organic, 
                Ayurvedic, and other natural products were available in one place. After that, his great-grandson, 
                Dr. Gopal Krishna Bass, understanding the importance of natural products, and with the goal of making 
                the community healthy and disease-free, created natural products using natural methods.
              </p>
              <p>
                Today, the BASS group is known for quality and is also known as the "Father of Organics." 
                On his same path, his grandson Dr. Gopal Krishan Bass laid the foundation stone of Kunj Bass Labs 
                in 1965, in which he manufactured Ayurvedic and millet-based protein powder.
              </p>
            </div>
            <div className="brand-stats">
              <div className="stat-item">
                <div className="stat-number">140+</div>
                <div className="stat-label">Years of Legacy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1880</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">13</div>
                <div className="stat-label">States Served</div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            {brandFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Discover our most popular organic, millet, and natural products, carefully selected for quality and nutrition.
          </p>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                  <button className="btn btn-primary btn-sm">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products" className="btn btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Combat Malnutrition?</h2>
            <p>Join us in building a healthy and developed India with quality organic, millet, and natural products.</p>
            <Link to="/products" className="btn btn-primary">
              Start Shopping Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 