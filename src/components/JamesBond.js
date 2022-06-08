import { useState } from 'react';
import './JamesBond.scss';

export default function JamesBond() {
  const [circleSize, setCircleSize] = useState(100);

  const updateCircleSize = (circleSize, setCircleSize) => {
    
  };

  return (
    <div className='james-bond' onWheel={(e) => console.log('event', e)}>
      <div className='circ'></div>
    </div>
  );
}
