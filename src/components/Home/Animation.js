import { useEffect, useRef } from 'react';
import castle from './castle.png'
import { gsap } from 'gsap';

function Animation() {
  const castleRef = useRef(null);

  useEffect(() => {
    gsap.from(castleRef.current, {
      y: 8,
      duration: 1.5,
      opacity: 0,
      scale: 0.8,
      
      onComplete: () => {
        gsap.set(castleRef.current, { 
        opacity: 1, 
        scale: 1 
    }); 
      },
    });
  }, []);

  return (
    <div ref={castleRef} className='castle'>
            <img src={castle} alt='Hogwarts castle'/>
        </div>
  );
}

export default Animation;
