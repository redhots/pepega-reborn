import React, { useState } from 'react';

const RedDot = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    const { left, top } = event.target.getBoundingClientRect();
    setCoordinates({ x: event.clientX - left, y: event.clientY - top });
    setVisible(true);
  };

  return (
    <div className="red-dot-container" onClick={handleClick} style={{ height: '100vh', position: 'relative' }}>
      {visible && (
        <div
          style={{
            position: 'absolute',
            top: `${coordinates.y}px`,
            left: `${coordinates.x}px`,
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
            borderRadius: '50%', 
          }}
        />
      )}
    </div>
  );
};

export default RedDot;
