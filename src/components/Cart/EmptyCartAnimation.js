import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import snitch from './snitch_wings_up.png';

const EmptyCartAnimation = () => {
  const snitchRef = useRef(null);

  useEffect(() => {
    const snitch = snitchRef.current;

    if (snitch) {
      gsap.fromTo(
        snitch,
        {
          y: -10,
        },
        {
          y: 10, 
          ease: 'power1.inOut',
          scale: 0.7,
          duration: 1,
          yoyo: true,
          repeat: -1, 
        }
      );
    }
  }, []);

  return (
    <div className="snitch">
      <img ref={snitchRef} src={snitch} alt="Sparkles" />
    </div>
  );
};

export default EmptyCartAnimation;
