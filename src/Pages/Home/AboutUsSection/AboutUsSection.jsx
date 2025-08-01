import React from 'react';
import './AboutUsSection.css';

import Team from '../../../assets/images/team.jpg'
import Member from '../../../assets/images/member.jpg'

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Section Header */}
        <div className="about-us-header">
          <span className="what-we-do-tag">What We Do</span>
          <h2 className="about-us-title">
            We Specialize In Delivering Cutting-Edge Solutions Across Web Development, 
            App Development, AI, And Digital Marketing Domains.
          </h2>
        </div>

        {/* Two-Column Content Layout */}
        <div className="about-us-content">
          {/* Left Column: Images and Large Stat */}
          <div className="content-left">
            <div className="top-image-wrapper">
              {/* Main team image */}
              <img src={Team} alt="Our Team Collaborating" className="about-us-image" />
            </div>
            <div className="bottom-content">
              <div className="stat-item large-stat">
                <span className="stat-value">5000</span>
                <span className="stat-label">Daily active User</span>
              </div>
              <div className="bottom-image-wrapper">
                {/* Second smaller image */}
                <img src={Member} alt="Team Member" className="bottom-image" />
              </div>
            </div>
          </div>

          {/* Right Column: Description and Statistics Grid */}
          <div className="content-right">
            <p className="about-us-description">
              From crafting bespoke websites to developing innovative mobile apps, harnessing the power of artificial intelligence, to driving digital marketing strategies, we empower businesses to thrive in the digital age. Our expert team combines creativity, technology, and strategic thinking to deliver results that exceed expectations.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">850 +</span>
                <span className="stat-label">Projects done</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">400 +</span>
                <span className="stat-label">Awesome Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">10 +</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">250 +</span>
                <span className="stat-label">Team Advisor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
