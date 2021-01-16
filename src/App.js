import React, {useState} from 'react';
import './App.css';

function App() {

  const [show, setShow] = useState('close');

  return (
    <>
      <h1 className="animation_text animation">Bradley Vangelder</h1>


      <h1 className="nav_name">Bradley Vangelder</h1>

      <div className="nav">
          <ul className={show !== 'close' ? 'slide_left' : 'slide_back'}>
              <li><a href="/#" onClick={(e) => setShow('about')}>about</a></li>
              {console.log(show)}
              <li><a href="/#" onClick={(e) => setShow('contact')}>contact</a></li>
              <li><a href="/#" onClick={(e) => setShow('resume')}>resume</a></li>
          </ul>
      </div>

      <div className={show === 'about' ? 'slide_left_container container': 'none'}>
        <h2>About</h2>
        <p>Wat text eh boykes</p>
      </div>
    </>
  );
}

export default App;
