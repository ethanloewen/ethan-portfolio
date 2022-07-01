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

  // get mouse scroll and set circle size
  const totalComponentHeight = 1000;
  const handleScroll = (e) => {
    const offset = window.pageYOffset / totalComponentHeight;
    setCircleSize(offset * 5000);
  }

  const circleStyle = {
    minWidth: `${circleSize}px`,
    minHeight: `${circleSize}px`
  };

  // get mouse position and set circle position
  const handleMouse = (e) => {
    const mousePosX = Math.round((e.clientX / window.innerWidth) * 1000) / 1000;
    const mousePosY = Math.round((e.clientY / window.innerHeight) * 1000) / 1000;

    const circleLocationX = mousePosX * 100;
    const circleLocationY = mousePosY * 100;

    $(".circ").css("left", `${circleLocationX}%`);
    $(".circ").css("top", `${circleLocationY}vh`);

    let section = 0;
    if (circleLocationX < 33.33) {
      section = 1;
      $("body").css("background-color", `#2980B9`);
    } else if (circleLocationX < 66.66) {
      section = 2;
      $("body").css("background-color", `#1ABC9C`);
    } else {
      section = 3;
      $("body").css("background-color", `#F1C40F`);
    }

    // console.log('section - ', section);
  }

  return (
    <div className='james-container'>
      <div className='james-bond'>
        <div className='circ' style={circleStyle}></div>
      </div>
    </div>
  );
}
