import { useState } from 'react';
import './Sections.scss';
import Canvas from './Canvas';

export default function Sections() {

  return (
    <div className='sections-container'>
      <div id='sec-1'></div>
      <div id='sec-2'></div>
      <div id='sec-3'></div>
    </div>
  );
}
