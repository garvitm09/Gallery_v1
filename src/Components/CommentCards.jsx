import React, { useState } from 'react';
import '../css/CommentCards.css';
import { Heart, Calendar, Map, Camera, Star, Gift, ArrowLeft, ArrowRight } from 'lucide-react';
import MemoryStats from '../Components/MemoryStats';
import { driveAsset } from '../lib/driveAsset';

const side_pose = driveAsset("side_pose.png");

const Cards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const memories = [
    {
      id: 1,
      title: 'Movie Night',
      date: 'Apr 30',
      category: 'Dates',
      image: side_pose
    },
    {
      id: 2,
      title: 'Beach Getaway',
      date: 'May 15',
      category: 'Travel',
      image: side_pose
    },
    {
      id: 3,
      title: 'Hiking Adventure',
      date: 'Jun 8',
      category: 'Adventures',
      image: side_pose
    },
    {
      id: 4,
      title: 'Anniversary Dinner',
      date: 'Jul 22',
      category: 'Celebrations',
      image: side_pose
    },
    {
      id: 5,
      title: 'Christmas Together',
      date: 'Dec 25',
      category: 'Holidays',
      image: side_pose
    },
    {
      id: 6,
      title: 'Birthday Surprise',
      date: 'Mar 12',
      category: 'Surprises',
      image: side_pose
    }
  ];

  const categories = [
    { name: 'Dates', icon: <Heart size={16} /> },
    { name: 'Travel', icon: <Map size={16} /> },
    { name: 'Adventures', icon: <Camera size={16} /> },
    { name: 'Celebrations', icon: <Star size={16} /> },
    { name: 'Holidays', icon: <Calendar size={16} /> },
    { name: 'Memories', icon: <Camera size={16} /> },
    { name: 'Surprises', icon: <Gift size={16} /> },
    { name: 'Love', icon: <Heart size={16} /> }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === memories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? memories.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
      <div className="gallery-container">
        
        <div className="header">
          <h1>Our <span className="accent">Love</span> Story</h1>
          <p>Every moment with you becomes a treasured memory. This gallery captures our journey together.</p>
        </div>
        
        <div className="button-group">
          <button className="btn btn-primary">
            <Heart size={16} /> View Gallery
          </button>
          <button className="btn btn-secondary">
            <Calendar size={16} /> Timeline
          </button>
        </div>
        
        <div className="categories">
          {categories.map((category, index) => (
            <div key={index} className="category-tag">
              {category.icon} #{category.name}
            </div>
          ))}
        </div>
        
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            <ArrowLeft size={24} />
          </button>
          
          <div className="carousel">
            {memories.map((memory, index) => (
              <div 
                key={memory.id} 
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="memory-card">
                  <div className="memory-img" />
                    <img src="memory.image"/>
                  <div className="memory-info">
                    <h3>{memory.title}</h3> 
                    <p>{memory.date}</p>
                  </div>
                  <button className="favorite-btn">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-button next" onClick={nextSlide}>
            <ArrowRight size={24} />
          </button>
        </div>
        
        <div className="carousel-dots">
          {memories.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      < MemoryStats />
    </div>
  );
};

export default Cards;
