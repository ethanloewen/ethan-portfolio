import { useState, useEffect } from 'react';
import './JamesBond.scss';
import Guide from './Guide';

export default function JamesBond() {
  const [circleSize, setCircleSize] = useState(50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
  });

  const totalComponentHeight = 1000;

  const handleScroll = (e) => {
    const offset = window.pageYOffset / totalComponentHeight;
    setCircleSize(offset * 5000);
  }

  const handleMouse = (e) => {
    console.log(e.clientX / window.innerWidth);
    console.log(e.clientY / window.innerHeight);

    console.log(
      "Window Width", window.innerWidth,
      "Window Height", window.innerHeight,
      "clientX: ", e.clientX, 
      "clientY:", e.clientY
    )
  }

  const circleStyle = {
    minWidth: `${circleSize}px`,
    minHeight: `${circleSize}px`
  };

  return (
    <div className='james-container'>
      <div className='james-bond'>
        <div className='circ' style={circleStyle}></div>
      </div>
    </div>
  );
}
