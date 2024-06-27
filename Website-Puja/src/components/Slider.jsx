import React, { useState } from 'react';

const cards = [
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
  { id: 4, content: 'Card 4' },
  { id: 5, content: 'Card 5' },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card) => (
            <div key={card.id} className="slide">
              {card.content}
            </div>
          ))}
        </div>
      </div>
      <button className="slider-control prev" onClick={goToPrevSlide}>
        Prev
      </button>
      <button className="slider-control next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default CardSlider;
