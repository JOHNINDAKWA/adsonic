import React, { useState } from 'react';
import './ContactInsightsForm.css';
import { FaArrowRight } from 'react-icons/fa';

const interestsList = [
  'Digital Marketing',
  'Web Design',
  'Application Design',
  'Web Development',
  'AI',
  'Graphics & Design',
  'Photography',
  'Videography',
  'SEO Optimization',
  'Cloud'
];

const ContactInsightsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interests: [],
  });

  const handleCheckboxChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="contact-insights-section">
      <div className="contact-card">
        <h2 className="contact-title">Latest research & tech insights of Hola Tech</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="interests">
            <label className="interests-label">What are you interested in?</label>
            <div className="interests-grid">
              {interestsList.map((interest, index) => (
                <label key={index} className={`interest-option ${formData.interests.includes(interest) ? 'selected' : ''}`}>
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleCheckboxChange(interest)}
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          <div className="form-row two-col">
            <input type="text" name="name" placeholder="Name *" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email *" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-row">
            <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-row">
            <textarea name="message" placeholder="How can we help you?" rows="4" value={formData.message} onChange={handleChange}></textarea>
          </div>

          <div className="form-row submit">
            <button type="submit">
              Submit <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactInsightsForm;
