
import { useState, useEffect } from 'react';
import './App.css';
// import Guide from './components/Guide';
import JamesBond from './components/JamesBond';
import Sections from './components/Sections';
import Canvas from './components/Canvas';

function App() {

  const [sectionColor, setSectionColor] = useState('');

  return (
    <div className='app'>
      {/* <Guide/> */}
      <Canvas />
      <JamesBond/>
      <Sections/>
    </div>
  );
}

export default App;
