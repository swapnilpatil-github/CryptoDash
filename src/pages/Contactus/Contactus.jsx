import React, { useState } from 'react';
import './Contactus.css';

function Contactus() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitStatus('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className="contactus-container">
        <p><marquee>This Form will work very soon,Thank You for visiting </marquee></p>
      <h1 className="contactus-title">Contact Me</h1>
      <form className="contactus-form" onSubmit={handleSubmit}>
        <label className="contactus-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contactus-input"
          />
        </label>
        <label className="contactus-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contactus-input"
          />
        </label>
        <label className="contactus-label">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contactus-textarea"
          />
        </label>
        <button type="submit" className="contactus-button">Send Message</button>
      </form>
      {submitStatus && <p className="contactus-status">{submitStatus}</p>}
      
    </div>
  );
}

export default Contactus;
