import React, {useState} from 'react';
import './App.scss';
import me from './pictures/me.jpg';

function App() {

  const [show, setShow] = useState('close');

  return (
    <div className="App">
      <div className="nav_top">
        <h2 className="nav_name" onClick={() => setShow('close')}>Bradley Vangelder.</h2>
      </div>

      <div className="lines">
        <p className="loop_text">driven / motivated / creative / fullstack developer / synergy / go-getter / think outside the box / value add / team player</p>
        <div className="invis_right"></div>
        <div className="invis_left"></div>
      </div>

      <h2 className="background_text">Fullstack -</h2>
      <h2 className="background_text_2">developer</h2>
      <h1 className="animation_text">Bradley Vangelder</h1>

      <div className="nav">
          <ul className={show !== 'close' ? 'slide_left' : 'slide_back'}>
              <li onClick={(e) => setShow('about')}>about</li>
              {console.log(show)}
              <li onClick={(e) => setShow('contact')}>contact</li>
              <li onClick={(e) => setShow('resume')}>resume</li>
          </ul>
      </div>

      <div className={show === 'about' ? 'slide_left_container container': 'none'}>
        <h3>About</h3>
        <p>I'm Bradley Vangelder, 19 Years, student at Thomas More Geel. In my free time i like to workout, play guitar, level my self up in graphic design and get just get some personal projects done. I'm a really social person and love to work in group to expand my contact portfolio.</p>
        <img src={me} alt=""/>
        <p className="back" onClick={() => setShow('close')}>
          <span className="material-icons">
            west
          </span>
        </p>
      </div>

      <div className={show === 'contact' ? 'slide_left_container container': 'none'}>
        <h3>Contact</h3>
        <p>I'm open for some new experiences and projects to work on for a client. I'm active on different social media platforms so if you wanna contact me you should defenately try one of these.
          <p className="icons">
            <a href="https://twitter.com/BradleyCreation" target="blank">
            <i
            class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/bradleyvangelder/" target="blank">
              <i
              class="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/BradleyVangelder" target="blank">
              <i
              class="fab fa-github"></i>
            </a>
          </p>
        </p>

        <p className="back" onClick={() => setShow('close')}>
          <span class="material-icons">
            west
          </span>
        </p>
      </div>
      <footer className="footer">© Bradley Vangelder</footer>
    </div>
  );
}

export default App;
