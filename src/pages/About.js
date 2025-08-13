import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: '🌾',
      title: 'Millet Nutrition',
      description: 'Providing high-quality millet-based products to combat malnutrition and ensure proper nutrition.'
    },
    {
      icon: '🏥',
      title: 'Health Mission',
      description: 'Committed to ending malnutrition and lifestyle diseases through natural, organic products.'
    },
    {
      icon: '👥',
      title: 'Community Empowerment',
      description: 'Supporting farmers and women\'s self-help groups for economic empowerment.'
    },
    {
      icon: '🏆',
      title: 'Quality Legacy',
      description: '140-year-old trustworthy brand known as the "Father of Organics" with proven quality.'
    }
  ];

  const team = [
    {
      name: 'Ritu Raj Bass',
      role: 'Founder & CEO',
      image: '👨‍💼',
      bio: 'Senior social worker and agri-entrepreneur, founder of Millo Shakti.'
    },
    {
      name: 'Dr. Badri Prasad Bass',
      role: 'Legacy Founder (1880)',
      image: '👨‍⚕️',
      bio: 'Established the first supermarket in Bareilly Division with organic and Ayurvedic products.'
    },
    {
      name: 'Dr. Gopal Krishna Bass',
      role: 'Innovation Pioneer',
      image: '👨‍🔬',
      bio: 'Created natural products using natural methods and founded Kunj Bass Labs in 1965.'
    },
    {
      name: 'Dr. Gopal Krishan Bass',
      role: 'Quality Pioneer',
      image: '👨‍🌾',
      bio: 'Known as the "Father of Organics" and laid foundation for Ayurvedic and millet-based products.'
    }
  ];

  const milestones = [
    { year: '1880', title: 'Foundation', description: 'Dr. Badri Prasad Bass established first supermarket in Bareilly Division' },
    { year: '1965', title: 'Kunj Bass Labs', description: 'Dr. Gopal Krishan Bass founded Ayurvedic and millet-based products lab' },
    { year: '2020', title: 'Millo Shakti', description: 'Ritu Raj Bass founded Millo Shakti to combat malnutrition' },
    { year: '2024', title: '13 States', description: 'Serving across 13 states with quality organic and millet products' },
    { year: 'Future', title: 'Healthy India', description: 'Working towards the dream of a healthy and developed India' }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-title">About Millo Shakti</h1>
            <p className="about-subtitle">
              140-year-old trustworthy and quality-focused, Millo Shakti is committed to ending malnutrition 
              and providing economic empowerment to farmers and women's self-help groups.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section section">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Millo Shakti, our mission is to eradicate malnutrition in common people, especially in children, 
                breastfeeding mothers, construction laborers, and people below the poverty line. We provide high-quality 
                organic, millet, and natural products at very low prices to reach even the last person.
              </p>
              <p>
                In today's scenario, in 13 states out of its 63 districts, more than half of the kids are dwarfs 
                (short size according to age). The main reason for this is not having a nutritional diet. 
                We are committed to solving this problem through our quality products.
              </p>
            </div>
            <div className="mission-image">
              <div className="mission-visual">🌾</div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section section">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            These core values guide everything we do at RituBass
          </p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section section">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Legacy</h2>
              <p>
                Millo Shakti was founded by senior social worker and agri-entrepreneur Ritu Raj Bass. 
                Dr. Badri Prasad Bass established a supermarket around Bareilly Mandal in 1880, where organic, 
                Ayurvedic, and other natural products were available in one place. After that, his great-grandson, 
                Dr. Gopal Krishna Bass, understanding the importance of natural products, and with the goal of making 
                the community healthy and disease-free, created natural products using natural methods.
              </p>
              <p>
                Today, the BASS group is known for quality and is also known as the "Father of Organics." 
                On his same path, his grandson Dr. Gopal Krishan Bass laid the foundation stone of Kunj Bass Labs 
                in 1965, in which he manufactured Ayurvedic and millet-based protein powder.
              </p>
              <p>
                140-year-old trustworthy and quality-focused, Millo Shakti is committed to ending malnutrition 
                in the present time. This will include organic, millets, and all natural products. 
                The dream of a healthy and developed India will be fulfilled.
              </p>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="milestones-section section">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section section">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate people behind RituBass Organic Shop
          </p>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta section">
          <div className="cta-content">
            <h2>Join Our Mission to End Malnutrition</h2>
            <p>
              Ready to be part of building a healthy and developed India? 
              Start your journey with Millo Shakti today.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Shop Now</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 