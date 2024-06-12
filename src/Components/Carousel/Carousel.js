import React, { useState } from 'react';
import './Carousel.css'; // Adjust the path as needed

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      <button className="carousel-button left" onClick={handlePrev}>‹</button>
      <button className="carousel-button right" onClick={handleNext}>›</button>
    </div>
  );
};

export default Carousel;