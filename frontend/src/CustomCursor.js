import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Move the custom cursor to the current mouse position
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    // Add event listener for mouse move
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <div className="cart-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" fill="#3498db"></circle>
          <circle cx="20" cy="21" r="1" fill="#e74c3c"></circle>
          <path
            d="M1 1h4l2.68 10.71a2 2 0 0 0 1.92 1.39h10.8a2 2 0 0 0 1.92-1.39L23 5H6"
            stroke="#e74c3c"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
