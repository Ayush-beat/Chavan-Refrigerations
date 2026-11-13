import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import './SellToUs.css';

const SellToUs = () => {
  return (
    <section id="sell" className="sell-section">
      <div className="container">
        <div className="sell-grid">
          
          <div className="sell-info">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Turn Your Old Fridge into Cash</h2>
            <p className="sell-desc">
              Upgrading? Don't let your old appliance gather dust. We buy back used washing machines, refrigerators, TVs, and microwaves right here in Panvel.
            </p>
          </div>
          
          <div className="sell-portal glass-panel">
            <h3>3 Simple Steps to Sell</h3>
            <p className="steps-sub">Get cash for your appliance today without leaving home.</p>
            
            <ul className="sell-steps-list">
              <li>
                <div className="step-num">1</div>
                <div><strong>Send Photos on WhatsApp</strong><br/>Take 2-3 clear photos & send them over.</div>
              </li>
              <li>
                <div className="step-num">2</div>
                <div><strong>Get a Quote</strong><br/>We'll reply with an instant fair valuation.</div>
              </li>
              <li>
                <div className="step-num">3</div>
                <div><strong>Instant Pickup</strong><br/>We pick it up for free and pay you on the spot.</div>
              </li>
            </ul>
            
            <a href="https://wa.me/919881904102?text=Hi%20Chavan%20Refrigeration,%20I%20want%20to%20Sell%20my%20appliance." className="btn btn-success w-full mt-4" target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              WhatsApp Us Your Photos
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SellToUs;
