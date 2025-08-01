import React from 'react';
import Marquee from "react-fast-marquee";
import {
  FaArrowRight,
  FaBullhorn,
  FaPaintBrush,
  FaCamera,
  FaVideo,
  FaSearch,
  FaMobileAlt,
  FaCode,
  FaRobot,
  FaCloud,
} from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import './HomePage.css';

import videoBg from '../../assets/images/video-home.mp4';

import partner1 from '../../assets/images/Partners/Partner1.png';
import partner2 from '../../assets/images/Partners/Partner2.png';
import partner3 from '../../assets/images/Partners/Partner3.png';
import partner4 from '../../assets/images/Partners/Partner4.png';
import partner5 from '../../assets/images/Partners/Partner5.png';
import partner6 from '../../assets/images/Partners/Partner6.png';
import partner7 from '../../assets/images/Partners/Partner7.png';
import partner8 from '../../assets/images/Partners/Partner8.png';
import partner9 from '../../assets/images/Partners/Partner9.png';
import partner10 from '../../assets/images/Partners/Partner10.png';
import partner11 from '../../assets/images/Partners/Partner11.png';
import partner12 from '../../assets/images/Partners/Partner12.png';
import partner13 from '../../assets/images/Partners/Partner13.png';
import partner14 from '../../assets/images/Partners/Partner14.png';
import ServicesSection from './ServiceSection/ServiceSection';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import ContactInsightsForm from './ContactInsightsForm/ContactInsightsForm';

// Services list
const services = [
  { icon: <FaBullhorn />, title: "Digital Marketing" },
  { icon: <MdWeb />, title: "Web Design" },
  { icon: <FaMobileAlt />, title: "Application Design" },
  { icon: <FaCode />, title: "Web Development" },  
  { icon: <FaRobot />, title: "AI" }, 
  { icon: <FaPaintBrush />, title: "Graphics & Design" },
  { icon: <FaCamera />, title: "Photography" },
  { icon: <FaVideo />, title: "Videography" },
  { icon: <FaSearch />, title: "SEO Optimization" },
  { icon: <FaCloud />, title: "Cloud" },
];

const HomePage = () => {
  // Array of partner images for the marquee
  const partnerImages = [
    { src: partner1, alt: "Partner 1" },
    { src: partner2, alt: "Partner 2" },
    { src: partner3, alt: "Partner 3" },
    { src: partner4, alt: "Partner 4" },
    { src: partner5, alt: "Partner 5" },
    { src: partner6, alt: "Partner 6" },
    { src: partner7, alt: "Partner 7" },
    { src: partner8, alt: "Partner 8" },
    { src: partner9, alt: "Partner 9" },
    { src: partner10, alt: "Partner 10" },
    { src: partner11, alt: "Partner 11" },
    { src: partner12, alt: "Partner 12" },
    { src: partner13, alt: "Partner 13" },
    { src: partner14, alt: "Partner 14" },
  ];

  return (

    <>
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="hero-content">
          <h1 className="hero-title">
            Horizon of Limitless <br /> Advancements in Creativity
          </h1>
          <p className="hero-subtitle">
            From branding to web development and visual storytelling, we empower your digital presence with expert-crafted solutions tailored for the future.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="icon">{service.icon}</span>
                <span className="text">{service.title}</span>
              </div>
            ))}
          </div>

          <button className="cta-button">
            <span>Our Portfolio</span>
            <FaArrowRight className="cta-icon" />
          </button>
        </div>
      </section>

      {/* Trusted Partners Section with Marquee */}
      <section className="trusted-partners-section">
        <div className="partners-content">
          <h2 className="partners-title">Trusted Partners</h2>
          <div className="marquee-container">
            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={true}
            >
              {partnerImages.map((partner, index) => (
                <div key={index} className="marquee-item">
                  <img src={partner.src} alt={partner.alt} className="partner-logo-marquee" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
    <ServicesSection/>
    <AboutUsSection/>
    <PortfolioSection/>
    <ContactInsightsForm/>
    </>
  );
};

export default HomePage;