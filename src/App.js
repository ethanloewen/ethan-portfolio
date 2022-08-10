import './App.css';
import Guide from './components/Guide';
import JamesBond from './components/JamesBond';
import Sections from './components/Sections';
import Canvas from './components/Canvas';

function App() {

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
