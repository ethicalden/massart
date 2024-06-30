// components/Carousel.js

import { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.arrow}>&lt;</button>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div className={styles.carouselItem} key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <img src={item.icon} alt={item.title} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles.arrow}>&gt;</button>
    </div>
  );
};

export default Carousel;
