import React from 'react';
import { Phone, MapPin, Search, ChevronRight } from 'lucide-react';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="header glass-panel stagger-enter delay-1">
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="location-info">
            <MapPin size={16} />
            <span>Serving Navi Mumbai</span>
          </div>
          <div className="contact-info">
            <a href="tel:+919881904102" className="phone-link">
              <Phone size={16} />
              <span>+91 9881904102</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container header-main-inner">
          <div className="logo">
            <span className="logo-accent">Chavan</span> Refrigeration
          </div>

          <div className="search-bar">
            <Search size={18} className="search-icon-inside" />
            <input 
              type="text" 
              placeholder="Search for appliances or services..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="header-actions">
            <a href="tel:+919881904102" className="btn btn-primary action-call">
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
      <nav className="header-secondary-nav stagger-enter delay-4">
        <div className="container nav-inner">
          <a href="#catalog" className="nav-link">Buy Appliances</a>
          <a href="#sell" className="nav-link">Sell Your Appliance</a>
          <a href="#repair" className="nav-link">Book a Service</a>
          <a href="#location" className="nav-link">Visit Our Store</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
