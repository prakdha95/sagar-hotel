import './ScrollToTop.css'
import React, { useState, useEffect } from 'react';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className='scroll_button'
      >
        ↑ 
      </button>
    )
  );
};

// Simple styles for the button (you can adjust these as needed)
// const styles = {
//   button: {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     padding: '10px 15px',
//     fontSize: '16px',
//     backgroundColor: 'black',
//     color: 'white',
//     border: 'none',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     opacity: 0.7,
//     transition: 'opacity 0.3s',
    
//   }
// };

export default ScrollToTopButton;
