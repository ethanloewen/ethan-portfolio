import { useState, useEffect } from 'react';
import './JamesBond.scss';
import Guide from './Guide';
import $ from 'jquery';

export default function JamesBond() {
  const [circleSize, setCircleSize] = useState(50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
  }, []);

  const totalComponentHeight = 1000;

  const handleScroll = (e) => {
    const offset = window.pageYOffset / totalComponentHeight;
    setCircleSize(offset * 5000);
  }

  const handleMouse = (e) => {
    const mousePosX = Math.round((e.clientX / window.innerWidth) * 1000) / 1000;
    const mousePosY = Math.round((e.clientY / window.innerHeight) * 1000) / 1000;

    const circleLocationX = `${mousePosX * 100}%`;
    const circleLocationY = `${mousePosY * 100}vh`;

    $(".circ").css("left", `${circleLocationX}`);
    $(".circ").css("top", `${circleLocationY}`);
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
