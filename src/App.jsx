import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyChavan from './components/WhyChavan'
import Catalog from './components/Catalog'
import SellToUs from './components/SellToUs'
import SavingsCalculator from './components/SavingsCalculator'
import RepairBooking from './components/RepairBooking'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Urban Company Style Scroll Animations Interceptor
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <div className="scroll-reveal"><Hero /></div>
        <div className="scroll-reveal"><WhyChavan /></div>
        <div className="scroll-reveal"><Catalog searchTerm={searchTerm} /></div>
        <div className="scroll-reveal"><SellToUs /></div>
        <div className="scroll-reveal"><SavingsCalculator /></div>
        <div className="scroll-reveal"><RepairBooking /></div>
        <div className="scroll-reveal"><Testimonials /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
