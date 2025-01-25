import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

const ScrollCounter = ({from , to , timing }) => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (

      <div ref={counterRef} >
        {isVisible ? <CountUp start={from} end={to} duration={timing} /> : '0'}
      </div>

  );
};

export default ScrollCounter;
