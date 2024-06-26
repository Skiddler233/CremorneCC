import React, { useState } from 'react';
import './Carousel.css';

// Function to display current index of Carousel Items
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function mapped to the left (previous) arrow
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Function mapped to the right (next) arrow
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  // Export the container for the carousel and the buttons
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