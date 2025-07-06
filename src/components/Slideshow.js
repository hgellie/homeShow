import React, { useState } from 'react';

// We define our slide data as an array of objects
const slides = [
  {
    image: '/images/homes/home1.png',
    alt: 'Home 1'
  },
  {
    image: '/images/homes/home2.png',
    alt: 'Home 2'
  },
  {
    image: '/images/homes/home3.png',
    alt: 'Home 3'
  }
];

function Slideshow() {
  // useState is a React Hook. It creates a state variable to hold the current slide's index.
  // 'currentSlide' is the variable, and 'setCurrentSlide' is the function to update it.
  const [currentSlide, setCurrentSlide] = useState(0); // Start at the first slide (index 0)

  // Function to go to the next slide
  const nextSlide = () => {
    // If we're at the last slide, loop to the first. Otherwise, go to the next one.
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    // If we're at the first slide, loop to the last. Otherwise, go to the previous one.
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slideshow-container">
      {/* The image source is now dynamic, based on the currentSlide state */}
      <div className="slide fade">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} />
      </div>

      {/* Navigation buttons that call our functions */}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Slideshow;