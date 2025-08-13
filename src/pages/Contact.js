import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'Bareilly, Uttar Pradesh, India',
      description: 'Come visit our store and see our organic and millet products'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+91 9412605731',
      description: 'Available Mon-Sat: 8AM-8PM'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'info@milloshakti.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: 'Monday - Saturday: 8AM - 8PM',
      description: 'Sunday: 9AM - 6PM'
    }
  ];

  const faqs = [
    {
      question: 'Do you deliver across India?',
      answer: 'We deliver to 13 states across India. Contact us to check availability in your area.'
    },
    {
      question: 'Are all your products organic and natural?',
      answer: 'Yes, all our products are organic, natural, and include high-quality millet-based products to combat malnutrition.'
    },
    {
      question: 'What makes Millo Shakti special?',
      answer: 'We have a 140-year legacy of quality and are known as the "Father of Organics" with trusted Ayurvedic and natural products.'
    },
    {
      question: 'Do you offer products for malnutrition?',
      answer: 'Yes, we specialize in millet-based products and natural supplements designed to combat malnutrition and provide essential nutrition.'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Get in touch with us for any questions or feedback.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our products or services? We're here to help! 
              Reach out to us through any of the following channels.
            </p>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p className="contact-main">{info.details}</p>
                    <p className="contact-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <p>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Interactive Map Coming Soon</p>
              <p className="map-address">Bareilly, Uttar Pradesh, India</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 