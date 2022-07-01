import { useState, useEffect } from 'react';
import './JamesBond.scss';

export default function JamesBond() {
  const [circleSize, setCircleSize] = useState(50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const totalComponentHeight = 1000;

  const handleScroll = (e) => {
    const offset = window.pageYOffset / totalComponentHeight;
    setCircleSize(offset * 5000);
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
