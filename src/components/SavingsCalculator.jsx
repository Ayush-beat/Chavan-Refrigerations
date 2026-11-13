import React, { useState } from 'react';
import './SavingsCalculator.css';

const Calculator = () => {
  const [appliance, setAppliance] = useState(25000);

  const getRefurbishedPrice = (newPrice) => Math.round(newPrice * 0.45);
  const getSavings = (newPrice) => newPrice - getRefurbishedPrice(newPrice);

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="calc-flex">
          <div className="calc-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>See the Value We Provide</h2>
            <p className="calc-desc">
              Why pay full price for a brand new appliance when our certified refurbished units look and function just like new? Use the calculator to see your typical savings.
            </p>
            
            <div className="slider-container">
              <label className="slider-label">Typical New Price: <strong>₹{appliance.toLocaleString()}</strong></label>
              <input 
                type="range" 
                min="10000" 
                max="80000" 
                step="1000" 
                value={appliance} 
                onChange={(e) => setAppliance(Number(e.target.value))}
                className="price-slider"
              />
              <div className="slider-markers">
                <span>₹10,000</span>
                <span>₹80,000+</span>
              </div>
            </div>
          </div>

          <div className="calc-visual">
            <div className="compare-card original">
              <span className="compare-title">New Price</span>
              <span className="compare-price">₹{appliance.toLocaleString()}</span>
            </div>
            
            <div className="compare-card saved">
              <span className="compare-title">Our Certified Price</span>
              <span className="compare-price">₹{getRefurbishedPrice(appliance).toLocaleString()}</span>
              <div className="saving-badge">You Save ₹{getSavings(appliance).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
