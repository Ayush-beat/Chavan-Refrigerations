import React from 'react';
import './Catalog.css';
import fridgeImg from '../assets/refrigerator.png';
import washerImg from '../assets/washing_machine.png';
import tvImg from '../assets/tv.png';
import microwaveImg from '../assets/microwave.png';

const products = [
  // Washing Machines
  {
    id: 1,
    name: 'Samsung 6.5kg Fully Automatic',
    category: 'Washing Machine',
    img: washerImg,
    price: '₹8,500',
    originalPrice: '₹16,000',
    condition: 'Expertly Repaired'
  },
  {
    id: 2,
    name: 'IFB 8kg Front Load',
    category: 'Washing Machine',
    img: washerImg,
    price: '₹14,500',
    originalPrice: '₹28,000',
    condition: 'Like New'
  },
  {
    id: 3,
    name: 'Whirlpool 7kg Top Load',
    category: 'Washing Machine',
    img: washerImg,
    price: '₹9,500',
    originalPrice: '₹18,500',
    condition: 'Gently Used'
  },
  
  // Refrigerators
  {
    id: 4,
    name: 'LG 260L Double Door Refrigerator',
    category: 'Refrigerator',
    img: fridgeImg,
    price: '₹12,000',
    originalPrice: '₹24,500',
    condition: 'Like New'
  },
  {
    id: 5,
    name: 'Whirlpool 190L Single Door',
    category: 'Refrigerator',
    img: fridgeImg,
    price: '₹7,500',
    originalPrice: '₹14,000',
    condition: 'Gently Used'
  },
  {
    id: 6,
    name: 'Samsung 340L Double Door',
    category: 'Refrigerator',
    img: fridgeImg,
    price: '₹16,000',
    originalPrice: '₹34,000',
    condition: 'Expertly Repaired'
  },

  // TVs
  {
    id: 7,
    name: 'Sony Bravia 43" Smart LED TV',
    category: 'Smart TV',
    img: tvImg,
    price: '₹14,000',
    originalPrice: '₹32,000',
    condition: 'Expertly Repaired'
  },
  {
    id: 8,
    name: 'Samsung 32" HD Ready TV',
    category: 'Smart TV',
    img: tvImg,
    price: '₹8,000',
    originalPrice: '₹16,500',
    condition: 'Gently Used'
  },
  {
    id: 9,
    name: 'LG 55" 4K Smart UHD TV',
    category: 'Smart TV',
    img: tvImg,
    price: '₹24,000',
    originalPrice: '₹55,000',
    condition: 'Like New'
  },

  // Microwaves
  {
    id: 10,
    name: 'Whirlpool 20L Solo Microwave',
    category: 'Microwave',
    img: microwaveImg,
    price: '₹3,500',
    originalPrice: '₹6,500',
    condition: 'Gently Used'
  },
  {
    id: 11,
    name: 'IFB 25L Convection Microwave',
    category: 'Microwave',
    img: microwaveImg,
    price: '₹5,500',
    originalPrice: '₹11,000',
    condition: 'Expertly Repaired'
  },
  {
    id: 12,
    name: 'Samsung 28L Convection',
    category: 'Microwave',
    img: microwaveImg,
    price: '₹6,500',
    originalPrice: '₹13,500',
    condition: 'Like New'
  }
];

const Catalog = ({ searchTerm = '' }) => {
  const filteredProducts = products.filter(product => {
    const term = searchTerm.toLowerCase();
    return product.name.toLowerCase().includes(term) || 
           product.category.toLowerCase().includes(term) ||
           product.condition.toLowerCase().includes(term);
  });

  const handleWhatsApp = (productName, condition) => {
    const msg = `Hi Chavan Refrigeration, I am interested in the ${productName} which is in ${condition} condition. Is it still available?`;
    window.open(`https://wa.me/919881904102?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const getConditionClass = (condition) => {
    if (condition === 'Like New') return 'badge-condition-new';
    if (condition === 'Expertly Repaired') return 'badge-condition-repaired';
    return 'badge-condition-used';
  };

  return (
    <section id="catalog" className="catalog-section">
      <div className="container">
        <h2 className="section-title">Certified Pre-Owned Inventory</h2>
        <p className="section-subtitle">
          Every appliance is thoroughly inspected, repaired, and rigorously tested by our experts in Panvel.
        </p>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrap">
                  <span className={`badge-condition ${getConditionClass(product.condition)}`}>{product.condition}</span>
                  <img src={product.img} alt={product.name} className="product-image" />
                  <div className="product-badges">
                    <span className="badge badge-blue">Certified Refurbished</span>
                    <span className="badge badge-green">6-Month Warranty</span>
                  </div>
                </div>
                <div className="product-details">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price-row">
                    <span className="product-price">{product.price}</span>
                    <span className="product-original-price">{product.originalPrice}</span>
                  </div>
                  <button 
                    onClick={() => handleWhatsApp(product.name, product.condition)}
                    className="btn btn-primary w-full mt-4" 
                    style={{ background: 'var(--co-green-primary)', borderColor: 'var(--co-green-primary)' }}>
                    WhatsApp for Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <h3>No appliances found matching "{searchTerm}"</h3>
            <p>Don't see what you need? Call us at <a href="tel:+919881904102"><strong>+91 9881904102</strong></a></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
