// useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (className = 'reveal', options = {}) => {
  useEffect(() => {
    const sr = ScrollReveal();


    sr.reveal(`.${className}`, {
      duration: 1000,
      distance: '50px',
      ...options,
    });


    return () => sr.destroy();
  }, [className, options]);
};

export default useScrollReveal;