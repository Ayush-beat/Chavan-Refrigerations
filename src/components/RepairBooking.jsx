import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import './RepairBooking.css';

const RepairBooking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const appliance = document.getElementById('appliance-select').value;
    const issue = document.getElementById('issue-desc').value;
    
    // WhatsApp URL Encoding
    let msg = `Hi Chavan Refrigeration, I want to Book Service for my ${appliance}. `;
    if (issue) {
      msg += `The issue is: ${issue}`;
    }
    const safeMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/919881904102?text=${safeMsg}`;
    
    window.open(waUrl, '_blank');
    
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <section id="repair" className="repair-section">
      <div className="container">
        <div className="repair-card glass-panel">
          <div className="repair-content">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Expert Repair Services <br /> in Panvel
            </h2>
            <p className="repair-desc">
              Facing issues with your appliance? Our certified mechanics provide quick, reliable, and affordable repair services at your doorstep. We service Washing Machines, Refrigerators, Microwaves, and TVs.
            </p>
            <div className="repair-features">
              <span className="badge badge-blue">Same-Day Visit</span>
              <span className="badge badge-green">Genuine Spare Parts</span>
            </div>
          </div>
          
          <div className="repair-form-wrapper">
            <form onSubmit={handleSubmit} className="repair-form">
              <h3 className="form-title">Book a Technician</h3>
              
              <div className="form-group">
                <label>Select Appliance</label>
                <select id="appliance-select" className="form-control" required defaultValue="">
                  <option value="" disabled>Choose your appliance...</option>
                  <option value="Washing Machine">Washing Machine</option>
                  <option value="Refrigerator">Refrigerator</option>
                  <option value="Smart TV">Smart TV</option>
                  <option value="Microwave Oven">Microwave Oven</option>
                </select>
              </div>

              <div className="form-group">
                <label>Describe the Issue</label>
                <textarea 
                  id="issue-desc"
                  className="form-control" 
                  rows="3" 
                  placeholder="e.g. Fridge is not cooling..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={submitted}>
                <Calendar size={18} />
                {submitted ? 'Redirecting...' : 'Book Visit via WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairBooking;
