import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';


const services = [
  'Digital Marketing', 'Web Design', 'Application Design', 'Web Development',
  'AI', 'Graphics & Design', 'Photography', 'Videography',
  'SEO Optimization', 'Cloud'
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-about">
          <h1 className="logo">Adsonic Digital</h1>
          <p>
            We help brands thrive online through creative campaigns, strategic design, and smart technology that drives measurable results.
          </p>

          <div className="footer-contact">
            <p><FaPhoneAlt /> (+254) 716 016706</p>
            <p><FaEnvelope /> info@adsonicdigitalagency.co.ke</p>
            <p><FaMapMarkerAlt /> 5th Floor, Plaza Hub, Nairobi, Kenya</p>
            <div className="footer-social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-services">
          <h4>Our Services</h4>
          <div className="service-grid">
            {services.map((service, index) => (
              <button key={index} className="service-btn">
                {service}
              </button>
            ))}
            <button className="contact-btn">
              Contact <FaArrowUpRightFromSquare />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Copyrights by <strong>Adsonic</strong>. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
