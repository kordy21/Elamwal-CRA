import { useState, useEffect, useCallback } from 'react';

export const useCarousel = ({ 
  itemsLength, 
  autoPlayInterval = 5000, 
  autoPlay = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === itemsLength - 1 ? 0 : prevIndex + 1
    );
  }, [itemsLength]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? itemsLength - 1 : prevIndex - 1
    );
  }, [itemsLength]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay || itemsLength <= 1) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext, itemsLength]);

  return {
    currentIndex,
    goToNext,
    goToPrevious,
    goToSlide,
  };
};