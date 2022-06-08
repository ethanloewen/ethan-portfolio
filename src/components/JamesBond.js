import { useState } from 'react';
import './JamesBond.scss';

export default function JamesBond() {
  const [circleSize, setCircleSize] = useState(50);

  window.addEventListener('scroll', (e) => {updateCircleSize()});

  const updateCircleSize = () => {
    if (circleSize < 200) {
      setCircleSize(prev => prev + 1);
      console.log(circleSize);
    } else {
      setCircleSize(prev => prev);
    }
  };

  const circleStyle = {
    minWidth: `${circleSize}px`,
    minHeight: `${circleSize}px`
  };

  return (
    <div className='james-bond'>
      <div className='circ' style={circleStyle}></div>
      {/* <div className='circ' style={circleStyle} onScroll={() => {console.log('scrolling')}}></div> */}
    </div>
  );
}
