"use client";

import { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Listen for mouse move events
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      // Cleanup listener on unmount
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: `${cursorPosition.x - 8}px`, top: `${cursorPosition.y - 8}px` }}
      ></div>
      <div
        className="cursor-circle"
        style={{ left: `${cursorPosition.x - 20}px`, top: `${cursorPosition.y - 20}px` }}
      ></div>
    </>
  );
};

export default Cursor;
