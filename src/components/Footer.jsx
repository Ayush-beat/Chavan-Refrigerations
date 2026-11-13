import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Wrench } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer" id="location">
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-brand">
              <div className="logo logo-footer">
                <span className="logo-accent">Chavan</span> Refrigeration
              </div>
              <p className="footer-desc">
                Your trusted local destination for certified pre-owned appliances and expert repair services in Panvel.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/nilesh.chavan.7921/" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#catalog">Shop Certified Inventory</a></li>
                <li><a href="#repair">Book a Repair</a></li>
                <li><a href="#sell">Sell Your Appliance</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Visit Our Shop</h3>
              <address className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} className="contact-icon" style={{ flexShrink: 0 }} />
                  <span>
                    Shop No 5, Malewadi Stop,<br/>
                    Panvel Matheran Rd,<br/>
                    Opposite Jalaram Super Market,<br/>
                    Sukapur, New Panvel East,<br/>
                    Panvel, Maharashtra 410206
                  </span>
                </div>
                <div className="contact-item">
                  <Phone size={20} className="contact-icon" />
                  <span>+91 9881904102</span>
                </div>
                <div className="contact-item">
                  <Mail size={20} className="contact-icon" />
                  <span>contact@chavanrefrigeration.com</span>
                </div>
              </address>
            </div>

          </div>

          <div className="map-placeholder">
            <div className="map-inner-actual" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'white', padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.883713025232!2d73.1118228!3d18.9868731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e814040d9c49%3A0x6b4fb7747eac1f4!2sSukapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: 'var(--radius-md)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Chavan Refrigeration Location"
              ></iframe>
              <div className="map-address-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--co-gray-900)' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', textAlign: 'left', lineHeight: '1.4' }}>
                  <strong>Chavan Refrigeration</strong><br/>
                  Shop No 5, Malewadi Stop, Sukapur<br/>
                  New Panvel East, 410206
                </p>
                <a href="https://maps.google.com/?q=Shop+No+5,+Malewadi+Stop,+Panvel+Matheran+Rd,+Sukapur,+New+Panvel+East,+410206" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Chavan Refrigeration. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Actions */}
      <div className="mobile-sticky-actions">
        <a href="tel:+919881904102" className="sticky-btn sticky-call">
          <Phone size={18} />
          Call
        </a>
        <a href="https://wa.me/919881904102" className="sticky-btn sticky-whatsapp" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          WhatsApp
        </a>
        <a href="#visited" className="sticky-btn sticky-book">
          <MapPin size={18} />
          Location
        </a>
      </div>
    </>
  );
};

export default Footer;
