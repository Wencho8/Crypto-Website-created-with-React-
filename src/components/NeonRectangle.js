import React, { useState, useEffect } from 'react';
import classes from './NeonRectangle.module.css';

const NeonRectangle = ({ initialRotation, direction}) => {
  const [rotation, setRotation] = useState(initialRotation);
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 400) {
        setRotation(rotation + (direction === 1 ? 200 : -200));
        setScale(5);
      }
      else if (scrollY > 300) {
        setRotation(rotation + (direction === 1 ? 140 : -140));
        setScale(4.5);
      }
      else if (scrollY > 200) {
        setRotation(rotation + (direction === 1 ? 90 : -90));
        setScale(4);
      } else if (scrollY > 150) {
        setRotation(rotation + (direction === 1 ? 60 : -60));
        setScale(2.7);
      } else if (scrollY > 80) {
        setRotation(rotation + (direction === 1 ? 30 : -30));
        setScale(1.7);
      } else {
        setRotation(initialRotation);
        setScale(1);
      }

      if (scrollY > 450) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialRotation, direction]);

  const containerStyle = {
    transform: `rotate(${rotation}deg) scale(${scale})`,
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div className={classes.container} style={containerStyle}>
      <div className={classes.neonRectangle}></div>
    </div>
  );
};

export default NeonRectangle;