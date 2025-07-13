import React, { useState } from 'react';
import home1 from '../images/homes/home1.png';
import home2 from '../images/homes/home2.png';
import home3 from '../images/homes/home3.png';

// We define our slide data as an array of objects
// Each object now holds the image source path and the alt text as strings
const slides = [
  {
    src: home1,
    alt: "Image of a modern home"
  },
  {
    src: home2,
    alt: "Image of a suburban home"
  },
  {
    src: home3,
    alt: "Image of a countryside home"
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
      {/* The image source and alt text are now correctly pulled from our slides array */}
      <div className="slide fade">
        <img src={slides[currentSlide].src} alt={slides[currentSlide].alt} />
      </div>

      {/* Navigation buttons that call our functions */}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Slideshow;