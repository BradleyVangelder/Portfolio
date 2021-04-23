import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  const [show, setShow] = useState('close');

  return (
    <div className="App">
      <nav>
      <div className="nav_top">
        <h2 className="nav_name" onClick={() => setShow('close')}>Bradley Vangelder.</h2>
      </div>
      <div className="lines">
        <p className="loop_text">driven / motivated / creative / fullstack developer / synergy / go-getter / think outside the box / value add / team player</p>
        <div className="invis_right"></div>
        <div className="invis_left"></div>
      </div>
      </nav>


      <main>
        <h2 className="background_text">Fullstack -</h2>
        <h2 className="background_text_2">developer</h2>
        <h1 className="animation_text">Bradley Vangelder</h1>

        <div className="container d-block">
          <div className="nav_div">
            <div className="nav">
                <ul className={show !== 'close' ? 'slide_left' : 'slide_back'}>
                    <li onClick={(e) => setShow('about')}>about</li>
                    {console.log(show)}
                    <li onClick={(e) => setShow('contact')}>contact</li>
                    <li onClick={(e) => setShow('resume')}>resume</li>
                </ul>
            </div>
          </div>

          <div className={show === 'about' ? 'slide_left_container container_modal container': 'none'}>
            <h3>About</h3>
            <p>I'm Bradley Vangelder, 19 Years, student at Thomas More Geel. A passionate developer and a big movie enthusiast. In my free time I like to broaden my programming knowledge, play guitar and just get some personal projects done. I'm a really social person and love to work in group to expand my contact portfolio.</p>
            <p className="back" onClick={() => setShow('close')}>
              <span className="material-icons">
                west
              </span>
            </p>
          </div>

          <div className={show === 'contact' ? 'slide_left_container container_modal container': 'none'}>
            <h3>Contact</h3>
            <p className="text-contact">I'm open for some new experiences and projects to work on for a client. I'm active on different social media platforms so if you wanna contact me you should definitely try one of these:</p>
            
            <p className="icons">
                <a href="https://twitter.com/BradleyCreation">
                <i
                class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/bradleyvangelder/">
                  <i
                  class="fab fa-instagram"></i>
                </a>
                <a href="https://github.com/BradleyVangelder">
                  <i
                  class="fab fa-github"></i>
                </a>
            </p>

            <p className="back" onClick={() => setShow('close')}>
              <span class="material-icons">
                west
              </span>
            </p>
          </div>

          <div className="resume-height">
            <div className={show === 'resume' ? 'slide_left_container container_modal resume': 'none'}>
              <h3>Resume</h3>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <p className="title_resume">Projects</p>
                  <p className="title_project">Frituur Fritz app - HTML / Jquery / SASS / Cordova</p>
                  <p className="short_description">Deze app heb ik gemaakt voor de frituur waar ik werk in kader van het vak Cordova. Ik heb dit allemaal kunnen realiseren door een backend te bouwen met PHP en de frontend met Jquery HTML en CSS. In dit project heb ik veel bijgeleerd over backend programming en database structuren en dit zal mij nog heel lang bijblijven.</p>
                  <p><a href="https://bradley.sinners.be/cordova/" target='blank'>LINK TO PROJECT</a></p>
                  
                  <p className="title_project">Requirement Analysis - UML / StarUML / Axure</p>
                  <p className="short_description">
                  Voor het van Requirement Analysis hebben wij een eisen analyse rapport moeten samenstellen voor een fictieve klant. Door heen het proces hebben wij alle kanttekeningen van de applicatie uitgewerkt in ons rapport. Dit ging dan van UC beschrijvingen tot UC diagrammen. Tijdens dit project heb ik een actieve rol gespeeld en heb ik zo veel mogelijk mijn team proberen te pushen voor een zo goed mogelijk resultaat te verkrijgen.</p>
                  <p><a href="https://bradley.sinners.be/assets/RA_BradleyVangelder_DDA.pdf" target='blank'>LINK TO PROJECT</a></p>
                  <p className="title_project">STAR WARS WIKI - Reactjs / HTML / Bootstrap</p>
                  <p className="short_description">As a movie enthusiast is decided to make a SW wiki during my learning Reactjs learning process. While making the app I developed a knowledge about functional programming in React, React hooks and fetch calls.</p>
                  <p><a href="https://swwiki.vercel.app/" target='blank'>LINK TO PROJECT</a></p>
                </div>

                <div className="col-lg-6 col-sm-12">
                  <p className="title_project">Kwotet - Entrepreneurship</p>
                  <p className="short_description">Dit is project dat ik alleen ben begonnen en nu een partner heb gevonden die samen meewerkt aan de uitwerking van dit idee.</p>
                  <p><a href="https://kwotet.com/" target='blank'>LINK TO PROJECT</a></p>
                </div>
              </div>
              <p className="back" onClick={() => setShow('close')}>
                <span className="material-icons">
                  west
                </span>
              </p>
            </div>
          </div>
        </div>
        

        <footer className="footer">© Bradley Vangelder</footer>
      </main>
    </div>
  );
}

export default App;
