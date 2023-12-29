// ScrollPosition.js
import { useEffect, useState } from 'react';

const useScrollPosition = (sections) => {
  const [scrollPositions, setScrollPositions] = useState({});

  useEffect(() => {
    const handleScroll = () => {
        const newScrollPositions = {};
    
        sections.forEach((sectionId) => {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            newScrollPositions[sectionId] = sectionElement.getBoundingClientRect().top + window.scrollY;
          }
        });
    
        console.log('New Scroll Positions:', newScrollPositions);
    
        setScrollPositions(newScrollPositions);
      };

    // Add an event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Initial calculation when the component mounts
    handleScroll();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return scrollPositions;
};

export default useScrollPosition;
