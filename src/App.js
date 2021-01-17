import React, {useState} from 'react';
import './App.css';
import sea from "./resources/sea.mp4";
import Container from 'react-bootstrap/Container'

function App() {

  const [show, setShow] = useState('close');

  return (
    <Container>
      <video autoPlay loop muted id="videoBG">
        <source src={sea} type="video/mp4"/>
      </video>

      <h1 className="animation_text animation">Bradley Vangelder</h1>

      <h1 className="nav_name">Bradley Vangelder</h1>

      <div className="nav">
          <ul className={show !== 'close' ? 'slide_left' : 'slide_back'}>
              <li onClick={(e) => setShow('about')}>about</li>
              {console.log(show)}
              <li onClick={(e) => setShow('contact')}>contact</li>
              <li onClick={(e) => setShow('resume')}>resume</li>
          </ul>
      </div>

      <div className={show === 'about' ? 'slide_left_container container': 'none'}>
        <h2>About</h2>
        <p>Wat text eh boykes</p>
      </div>
    </Container>
  );
}

export default App;
