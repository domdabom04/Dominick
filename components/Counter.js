"use client";

import { useState } from 'react';

function Counter({ increment, buttonColor = 'blue' }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + increment;
      return newCount > 10 ? 0 : newCount;
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button 
        onClick={handleIncrement} 
        style={{ 
          backgroundColor: buttonColor,
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '5px'
        }}
      >
        Increase by {increment}
      </button>
    </div>
  );
}

export default Counter;