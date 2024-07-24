import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react';

const BouncingImage = () => {
  const [styles, set] = useSpring(() => ({
    from: { transform: 'translate(0px, 0px) rotate(0deg)' },
    config: { mass: 100, tension: 400, friction: 400 }
  }));

  useEffect(() => {
    const heroElement = document.querySelector('.hero');
    const heroRect = heroElement.getBoundingClientRect();
    const heroWidth = heroRect.width;
    const heroHeight = heroRect.height;
    const imageSize = 1200; // Image width and height
    const margin = 2000; // Margin to avoid overlapping
    const animate = () => {
      const minX = margin;
      const maxX = heroWidth - imageSize - margin;
      const minY = margin;
      const maxY = heroHeight - imageSize - margin;

      const x = Math.random() * (maxX - minX) + minX;
      const y = Math.random() * (maxY - minY) + minY;
      const rotate = Math.random() * 360;

    
      set({
        transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
        onRest: animate
      });
    };

    animate();
  }, [set]);

  return (
    <animated.div style={{ width: '200px', height: '200px', ...styles, position: 'absolute',zIndex:'2'}}>
      <img src='/pepega-ak47.gif' style={{ width: '100%', height: '100%' }} />

    </animated.div>
  );
};

export default BouncingImage;
