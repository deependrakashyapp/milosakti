import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    // Millets
    { id: 1, name: 'Pearl Millet (Bajra)', price: '₹45/kg', image: '🌾', category: 'Millets', description: 'High-protein pearl millet for nutrition' },
    { id: 2, name: 'Finger Millet (Ragi)', price: '₹60/kg', image: '🌾', category: 'Millets', description: 'Calcium-rich finger millet flour' },
    { id: 3, name: 'Sorghum (Jowar)', price: '₹40/kg', image: '🌾', category: 'Millets', description: 'Gluten-free sorghum grain' },
    { id: 4, name: 'Foxtail Millet', price: '₹55/kg', image: '🌾', category: 'Millets', description: 'Nutritious foxtail millet' },
    { id: 5, name: 'Little Millet', price: '₹50/kg', image: '🌾', category: 'Millets', description: 'Small grain with big nutrition' },
    { id: 6, name: 'Kodo Millet', price: '₹65/kg', image: '🌾', category: 'Millets', description: 'Traditional kodo millet' },
    
    // Organic Vegetables
    { id: 7, name: 'Organic Tomatoes', price: '₹40/kg', image: '🍅', category: 'Vegetables', description: 'Fresh, vine-ripened organic tomatoes' },
    { id: 8, name: 'Fresh Carrots', price: '₹30/kg', image: '🥕', category: 'Vegetables', description: 'Sweet and crunchy organic carrots' },
    { id: 9, name: 'Organic Broccoli', price: '₹80/kg', image: '🥦', category: 'Vegetables', description: 'Nutritious green broccoli heads' },
    { id: 10, name: 'Fresh Spinach', price: '₹25/kg', image: '🥬', category: 'Vegetables', description: 'Tender baby spinach leaves' },
    
    // Ayurvedic Products
    { id: 11, name: 'Millet Protein Powder', price: '₹350/500g', image: '🥤', category: 'Ayurvedic', description: 'High-protein millet-based powder' },
    { id: 12, name: 'Ayurvedic Churna', price: '₹200/200g', image: '🌿', category: 'Ayurvedic', description: 'Traditional Ayurvedic herbal powder' },
    { id: 13, name: 'Organic Honey', price: '₹400/kg', image: '🍯', category: 'Ayurvedic', description: 'Pure organic honey' },
    { id: 14, name: 'Ghee', price: '₹600/kg', image: '🧈', category: 'Ayurvedic', description: 'Pure cow ghee' },
    
    // Natural Products
    { id: 15, name: 'Organic Turmeric', price: '₹120/kg', image: '🟡', category: 'Natural', description: 'Pure organic turmeric powder' },
    { id: 16, name: 'Black Pepper', price: '₹180/kg', image: '⚫', category: 'Natural', description: 'Organic black pepper' },
    { id: 17, name: 'Cinnamon', price: '₹250/kg', image: '🟤', category: 'Natural', description: 'Pure cinnamon powder' },
    { id: 18, name: 'Cardamom', price: '₹800/kg', image: '🟢', category: 'Natural', description: 'Green cardamom pods' },
    
    // Dairy
    { id: 19, name: 'Organic Milk', price: '₹60/liter', image: '🥛', category: 'Dairy', description: 'Pure organic whole milk' },
    { id: 20, name: 'Curd', price: '₹40/kg', image: '🍶', category: 'Dairy', description: 'Fresh organic curd' }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Millets', name: 'Millets' },
    { id: 'Vegetables', name: 'Vegetables' },
    { id: 'Ayurvedic', name: 'Ayurvedic' },
    { id: 'Natural', name: 'Natural' },
    { id: 'Dairy', name: 'Dairy' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            Discover our carefully curated selection of organic, millet, and natural products to combat malnutrition
          </p>
        </div>

        <div className="filters-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="products-container">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.image}</div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">{product.price}</div>
                    <div className="product-actions">
                      <button className="btn btn-primary btn-sm">Add to Cart</button>
                      <button className="btn btn-secondary btn-sm">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        <div className="product-count">
          Showing {filteredProducts.length} of {products.length} products
        </div>
      </div>
    </div>
  );
};

export default Products; 