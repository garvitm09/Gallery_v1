import React, { useState, useEffect } from 'react';
import '../css/final.css';
import MemoryStats from './MemoryStats';
import { Link } from "react-router-dom";
import { driveAsset } from '../lib/driveAsset';

const couple1 = driveAsset("Screenshot_20250522_014953.jpg");
const couple2 = driveAsset("Snapchat-414215647.jpg");
const couple3 = driveAsset("IMG-20250706-WA0055.jpg");
const couple4 = driveAsset("Snapchat-1996011902.jpg");
const couple5 = driveAsset("Snapchat-1983792865.jpg");
const couple6 = driveAsset("Snapchat-1605814228.jpg");

// Import images
const CouplesGallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [images, setImages] = useState([]);
  
  // Load images
  useEffect(() => {
    const imageData = [
      { id: 1, src: couple1, alt: 'Unexpected Outing', date: 'March 29', caption: 'Our unexpected outing' },
      { id: 2, src: couple2, alt: 'Dating Eve', date: '31 December', caption: 'Dating Eve Eve Eve' },
      { 
        id: 3, 
        src: couple3, 
        alt: 'Spade arcade', 
        date: '5 July', 
        caption: `With you Always!!`, 
        button: { text: "Coming to the stars with me??✨", link: "/star" } // 👈 Added button here
      },
      { id: 4, src: couple4, alt: 'Birthday', date: 'November 18', caption: `Baby's Borndayy` },
      { id: 5, src: couple5, alt: 'Picnic Day', date: '', caption: 'The day I fell for you' },
      { id: 6, src: couple6, alt: 'Last Day of College', date: '20 May', caption: `Last day won't come`},
    ];
    
    setImages(imageData);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const categories = ['#TINIII', '#Puchhiiil', '#Sweeto', '#bbiee', '#puchikoo', '#sweetooo', '#Love'];

  return (
    <div className="gallery-container">

      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="hero-title">I <span className="highlight">Love</span> You</h2>
        <p className="hero-subtitle">
          Every moment with you becomes a treasured memory. This gallery captures our journey together.
        </p>
        
        <div className="cta-buttons">
          <Link to="/gallery" className="nav-item" >
            <button className="view-gallery-btn">
              <span className="heart-small">♥</span> View Gallery
            </button>
          </Link>
          <Link to="/" className="nav-item" >
            <button className="timeline-btn">
              <span className="calendar-icon">📅</span> A Message for u!!
            </button>
          </Link>
        </div>

        <div className="categories">
          {categories.map((category, index) => (
            <span className="category-tag" key={index}>{category}</span>
          ))}
        </div>
      </section>

      {/* Slider Section */}
      <section className="gallery-slider">
        {images.length > 0 && (
          <>
            <div className="slider-container">
              <button className="slider-arrow left-arrow" onClick={prevSlide}>❮</button>
              
              <div className="slide">
                <img 
                  src={images[activeSlide]?.src} 
                  alt={images[activeSlide]?.alt || 'Gallery image'} 
                  className="slide-image" 
                />
                <div className="slide-info">
                  <h3>{images[activeSlide]?.caption}</h3>
                  <p>{images[activeSlide]?.date}</p>

                  {/* Conditionally render button */}
                  {images[activeSlide]?.button && (
                    <Link to={images[activeSlide].button.link}>
                      <button className="special-btn">{images[activeSlide].button.text}</button>
                    </Link>
                  )}
                </div>
              </div>
              
              <button className="slider-arrow right-arrow" onClick={nextSlide}>❯</button>
            </div>
            
            <div className="slider-indicators">
              {images.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator ${activeSlide === index ? 'active' : ''}`} 
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <MemoryStats />
    </div>
  );
};

export default CouplesGallery;

