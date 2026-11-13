import React from 'react';
import { ShieldCheck, Wrench } from 'lucide-react';
import './Hero.css';
import fridgeImg from '../assets/refrigerator.png';
import washerImg from '../assets/washing_machine.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        
        <div className="hero-content stagger-enter delay-2">
          <div className="badge badge-blue">
            <ShieldCheck size={16} style={{ marginRight: '4px' }} />
            Trusted in sukarpur & panvel
          </div>
          <h1 className="hero-title">
            Certified Pre-Owned Appliances <br/> 
            <span className="text-gradient">As Good As New.</span>
          </h1>
          <p className="hero-description">
            Save money without compromising on quality. We professionally refurbish top-brand appliances and provide expert local repair services right here in Panvel.
          </p>
          
          <div className="hero-buttons">
            <a href="#catalog" className="btn btn-primary btn-lg">
              View Appliances
            </a>
            <a href="#repair" className="btn btn-secondary btn-lg">
              <Wrench size={18} />
              Book a Repair
            </a>
          </div>
          
          <div className="trust-metrics">
            <div className="metric">
              <strong>1 Year</strong> Warranty Included
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <strong>100%</strong> Professional Repair
            </div>
          </div>
        </div>

        <div className="hero-visuals stagger-enter delay-3">
          <div className="image-composition">
            <img src={washerImg} alt="Certified Refurbished Washing Machine" className="img-main" />
            <div className="glass-card floating-card">
              <div className="card-icon">✓</div>
              <div className="card-text">
                <span className="card-title">Certified</span>
                <span className="card-sub">Refurbished</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
