import React from 'react';
import { Wrench, Settings, MapPin } from 'lucide-react';
import './WhyChavan.css';

const WhyChavan = () => {
  return (
    <section className="whychavan-section">
      <div className="container">
        <h2 className="section-title">Why Chavan Refrigeration?</h2>
        <p className="section-subtitle">
          Your trusted local partner in Panvel for reliable, certified pre-owned appliances and expert care.
        </p>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <Wrench size={32} className="trust-icon" />
            </div>
            <h3>Expert Technicians</h3>
            <p>Our natively trained technicians have years of experience repairing top-brand refrigerators, washing machines, and appliances.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <Settings size={32} className="trust-icon" />
            </div>
            <h3>Original Spare Parts</h3>
            <p>We use 100% genuine replacement parts to ensure longevity and peak performance for all our refurbished inventory.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <MapPin size={32} className="trust-icon" />
            </div>
            <h3>Local Panvel Service</h3>
            <p>Based in Sukapur, we offer lightning-fast doorstep service without the long waiting times. Support your local experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChavan;
