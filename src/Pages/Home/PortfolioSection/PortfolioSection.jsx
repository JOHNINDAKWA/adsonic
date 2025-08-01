import React, { useState, useEffect } from 'react';
import './PortfolioSection.css';

import VideoBg from '../../../assets/images/video-world.mp4'
import Portfolio1 from '../../../assets/images/portfolio1.jpg'
import Portfolio2 from '../../../assets/images/portfolio2.jpg'
import Portfolio3 from '../../../assets/images/portfolio3.jpg'
import Portfolio4 from '../../../assets/images/portfolio4.jpg'
import Portfolio5 from '../../../assets/images/portfolio5.jpg'
import Portfolio6 from '../../../assets/images/portfolio3.jpg'


// Project data to be displayed in the carousel
const projects = [
  {
    id: 1,
    image: Portfolio1,
    category: 'Digital Marketing',
    title: 'AdMax Campaign',
    description: 'A digital strategy to boost brand reach',
    tags: ['SEO', 'Social Media', 'PPC']
  },
  {
    id: 2,
    image: Portfolio2,
    category: 'Web Design',
    title: 'GlowSkin Studio',
    description: 'A modern, responsive skincare website',
    tags: ['UI/UX', 'Figma', 'Branding']
  },
  {
    id: 3,
    image: Portfolio3,
    category: 'Application Design',
    title: 'NutriApp',
    description: 'A user-friendly health tracking app',
    tags: ['Mobile UI', 'Prototyping', 'Wellness']
  },
  {
    id: 4,
    image: Portfolio4,
    category: 'Web Development',
    title: 'BuildPro Platform',
    description: 'A custom web app for construction firms',
    tags: ['React', 'Node.js', 'Database']
  },
  {
    id: 5,
    image: Portfolio5,
    category: 'AI',
    title: 'SmartSupport Bot',
    description: 'An AI chatbot for customer service',
    tags: ['AI', 'NLP', 'Automation']
  },
  {
    id: 6,
    image: Portfolio6,
    category: 'Graphics & Design',
    title: 'Zentro Branding',
    description: 'A full brand identity for a startup',
    tags: ['Logo', 'Design System', 'Creative']
  },
  {
    id: 7,
    image: Portfolio1,
    category: 'Photography',
    title: 'Product Photoshoot',
    description: 'Studio photography for product marketing',
    tags: ['Product', 'Lighting', 'Editing']
  },
  {
    id: 8,
    image: Portfolio2,
    category: 'Videography',
    title: 'Launch Video',
    description: 'A high-impact promotional video',
    tags: ['Filming', 'Editing', 'Motion']
  },
  {
    id: 9,
    image: Portfolio3,
    category: 'SEO Optimization',
    title: 'RankBoost Program',
    description: 'SEO strategy to increase search ranking',
    tags: ['Backlinks', 'Keywords', 'Audit']
  },
  {
    id: 10,
    image: Portfolio4,
    category: 'Cloud',
    title: 'CloudShift Migration',
    description: 'Cloud hosting for improved scalability',
    tags: ['AWS', 'DevOps', 'Security']
  },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 3) % projects.length);
    }, 10000); // 10-second delay as requested

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Filter projects based on the active filter
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  // Handle filter button clicks
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0); // Reset carousel to the start when a new filter is selected
  };

  return (
    <section className="portfolio-section">
      {/* Video Background - Replace with your video URL */}
      <div className="video-background-container">
     

                  <video autoPlay muted loop id="video-background">
                    <source src={VideoBg} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
       
      </div>
      <div className="portfolio-overlay"></div>

      <div className="portfolio-container">
        {/* Header Section */}
        <div className="portfolio-header">
          <span className="portfolio-tag">PORTFOLIO</span>
          <h2 className="portfolio-title">Projects crafted for a global audience</h2>
          <p className="portfolio-subtitle">We've completed 150+ projects for clients in 10+ countries</p>
        </div>

        {/* Filter Buttons */}
     <div className="filter-buttons">
  <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>All Projects</button>
  <button className={`filter-btn ${activeFilter === 'Digital Marketing' ? 'active' : ''}`} onClick={() => handleFilterClick('Digital Marketing')}>Digital Marketing</button>
  <button className={`filter-btn ${activeFilter === 'Web Design' ? 'active' : ''}`} onClick={() => handleFilterClick('Web Design')}>Web Design</button>
  <button className={`filter-btn ${activeFilter === 'Application Design' ? 'active' : ''}`} onClick={() => handleFilterClick('Application Design')}>Application Design</button>
  <button className={`filter-btn ${activeFilter === 'Web Development' ? 'active' : ''}`} onClick={() => handleFilterClick('Web Development')}>Web Development</button>
  <button className={`filter-btn ${activeFilter === 'AI' ? 'active' : ''}`} onClick={() => handleFilterClick('AI')}>AI</button>
  <button className={`filter-btn ${activeFilter === 'Graphics & Design' ? 'active' : ''}`} onClick={() => handleFilterClick('Graphics & Design')}>Graphics & Design</button>
  <button className={`filter-btn ${activeFilter === 'Photography' ? 'active' : ''}`} onClick={() => handleFilterClick('Photography')}>Photography</button>
  <button className={`filter-btn ${activeFilter === 'Videography' ? 'active' : ''}`} onClick={() => handleFilterClick('Videography')}>Videography</button>
  <button className={`filter-btn ${activeFilter === 'SEO Optimization' ? 'active' : ''}`} onClick={() => handleFilterClick('SEO Optimization')}>SEO Optimization</button>
  <button className={`filter-btn ${activeFilter === 'Cloud' ? 'active' : ''}`} onClick={() => handleFilterClick('Cloud')}>Cloud</button>
</div>


        {/* Project Carousel */}
        <div className="carousel-wrapper">
          <div className="carousel-track" style={{ transform: `translateX(-${(currentIndex / filteredProjects.length) * 100}%)` }}>
            {/* Displaying filtered projects for the carousel, repeating to ensure a loop */}
            {[...filteredProjects, ...filteredProjects, ...filteredProjects].map((project, index) => (
              <div className="project-card" key={`${project.id}-${index}`}>
                <div className="card-top-content">
                  <div className="card-image-wrapper">
                    <img src={project.image} alt={project.title} className="card-image" />
                  </div>
                  <div className="card-text-content">
                    <span className="card-category">{project.category}</span>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                  </div>
                </div>
                <div className="card-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="cta-button-container">
          <button className="view-portfolio-btn">
            View Portfolio
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
