import React, { useState } from 'react';
import { 
  FaBullhorn, 
  FaPaintBrush, 
  FaCamera, 
  FaVideo, 
  FaSearch, 
  FaRobot, 
  FaCloud, 
  FaMobileAlt,
  FaCode,
  FaArrowRight,
} from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import './ServiceSection.css';
import Web from '../../../assets/images/web.jpg'
import App from '../../../assets/images/app.png'
import Cloud from '../../../assets/images/cloud.jpg'
import Photography from '../../../assets/images/photography.jpg'
import Artificial from '../../../assets/images/artificial.jpg'
import DigitalMarketting from '../../../assets/images/digital-marketting.png'
import WebDev from '../../../assets/images/web-dev.jpg'
import Graphics from '../../../assets/images/Graphics.jpg'
import SEO from '../../../assets/images/seo-opt.jpg'
import Videography from '../../../assets/images/videography.jpg'

// A complete list of your services with icons, descriptions, and placeholder images
const services = [
  {
    icon: <FaBullhorn />, 
    title: "Digital Marketing",
    description: "Our dedicated digital marketing team crafts data-driven strategies to boost your online presence, drive traffic, and convert visitors into loyal customers. From SEO to social media campaigns, we cover all aspects to ensure your brand's success.",
    image: DigitalMarketting
  },
  { 
    icon: <MdWeb />, 
    title: "Web Design",
    description: "We create stunning, user-centric websites that not only look beautiful but also provide an intuitive and seamless user experience. Our designs are tailored to reflect your brand's identity and engage your target audience.",
    image: Web
  },
  { 
    icon: <FaMobileAlt />, 
    title: "Application Design",
    description: "From concept to launch, we design mobile applications that are both functional and visually captivating. Our focus is on creating a user-friendly interface that ensures a high level of engagement and satisfaction.",
    image: App
  },
  { 
    icon: <FaCode />, 
    title: "Web Development",
    description: "Our expert developers build robust and scalable websites using the latest technologies. We specialize in creating high-performance, secure, and custom web solutions that meet your business needs and future-proof your digital presence.",
    image: WebDev
  },
  { 
    icon: <FaRobot />, 
    title: "AI",
    description: "We harness the power of artificial intelligence to provide innovative solutions that automate processes, generate insights, and enhance user interactions. Our AI services are designed to give you a competitive edge in your industry.",
    image: Artificial
  },
  { 
    icon: <FaPaintBrush />, 
    title: "Graphics & Design",
    description: "Our creative team brings your brand to life with professional graphic design services. We craft compelling logos, branding materials, and visual assets that resonate with your audience and create a lasting impression.",
    image: Graphics
  },
  { 
    icon: <FaCamera />, 
    title: "Photography",
    description: "High-quality photography is essential for a strong brand image. We offer professional photography services to capture the essence of your products, services, and team, providing visually stunning content for your marketing channels.",
    image: Photography
  },
  { 
    icon: <FaVideo />, 
    title: "Videography",
    description: "From promotional videos to corporate storytelling, our videography services help you connect with your audience on a deeper level. We produce high-impact video content that is both engaging and effective.",
    image: Videography
  },
  { 
    icon: <FaSearch />, 
    title: "SEO Optimization",
    description: "We specialize in search engine optimization to ensure your website ranks higher on search results. Our strategies are focused on improving visibility, driving organic traffic, and establishing your brand as an industry leader.",
    image: SEO
  },
  { 
    icon: <FaCloud />, 
    title: "Cloud",
    description: "Our cloud solutions offer scalable, secure, and flexible infrastructure for your business. We help you migrate, manage, and optimize your cloud resources to improve efficiency, reduce costs, and enhance performance.",
    image: Cloud
  },
];

const ServicesSection = () => {
  // State to track the currently active service
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="our-services-section">
      {/* Section Header */}
      <div className="section-header">
        <h3 className="subheading">OUR SERVICES</h3>
        <h2 className="heading">Empowering change through impactful solutions</h2>
        <p className="description">
          Our dedicated and highly skilled team is committed to delivering full-stack solutions across multiple platforms and programming languages—efficiently and on time for our global clients.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="services-container">
        {/* Left Sidebar with service tabs */}
        <div className="services-sidebar">
          {services.map((service, index) => (
            <button
              key={index}
              className={`service-tab ${activeService.title === service.title ? 'active' : ''}`}
              onClick={() => setActiveService(service)}
            >
              <div className="icon-wrapper">{service.icon}</div>
              <span className="tab-title">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Right Content Area with service details */}
        <div className="service-details-content">
          <div className="details-header">
            <div className="icon-wrapper-header">{activeService.icon}</div>
            <h3 className="details-title">{activeService.title}</h3>
          </div>
          <p className="details-description">
            {activeService.description}
          </p>
          <div className="details-image-container">
            <img 
              src={activeService.image} 
              alt={activeService.title} 
              className="details-image" 
              onError={(e) => {
                e.target.src = "https://placehold.co/800x600/1e293b/d1d5db?text=Image+Not+Found";
                e.target.alt = "Image not found";
              }}
            />
          </div>
          <button className="view-details-button">
            <span>View service details</span>
            <FaArrowRight className="button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
