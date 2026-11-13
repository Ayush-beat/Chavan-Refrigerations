import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Rahul M.',
    location: 'Sukapur, Panvel',
    text: 'Bought a pristine washing machine. Looked totally new and works perfectly. The repair team was very polite and skilled. Highly recommend for anyone in Panvel!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sneha D.',
    location: 'New Panvel East',
    text: 'Their instant valuation for my old fridge was very fair. Traded it in and bought a certified double-door fridge. The 1-year warranty gives me total peace of mind.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit P.',
    location: 'Khanda Colony',
    text: 'Called them for microwave repair. The technician arrived within 2 hours, fixed it quickly, and charged a very reasonable fee. Excellent local service.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Trusted by the Community</h2>
        <p className="section-subtitle">
          Don't just take our word for it. See what our happy customers from Panvel have to say.
        </p>

        <div className="testimonials-grid">
          {reviews.map(review => (
            <div key={review.id} className="testimonial-card">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer-info">
                <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                <div>
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-location">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
