import React, { useState } from 'react';

const MouseTrailAnimation = () => {
  const [trail, setTrail] = useState([]);

  const handleMouseMove = (e) => {
    setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setTrail((prevTrail) => prevTrail.slice(1));
    }, 1000);
  };

  return (
    <div className='z-40'
      style={{ position: 'absolute', width: '100%', height: '100%' }}
      onMouseMove={handleMouseMove}
    >
      {trail.map((position, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: position.x + 'px',
            top: position.y + 'px',
            fontSize: '24px',
          }}
        >
          🌟
        </div>
      ))}
    </div>
  );
};

export default MouseTrailAnimation;
