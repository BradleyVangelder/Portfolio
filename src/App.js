import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Image from './pictures/me.jpg'
import PDF from './pictures/CV.pdf'

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
            <div className='row'>
              <p className='mr-5 d-md-none d-lg-block'><img src={Image} alt="" className='rounded-circle'/></p>
              <p>I'm Bradley Vangelder, 19 Years, student at Thomas More Geel. A passionate developer and a big movie enthusiast. In my free time I like to broaden my programming knowledge,read book, play guitar and just get some personal projects done. I'm a really social person and love to work in group to expand my contact portfolio.</p>
            </div>
            <p><a href="https://kwotet.com/" target='blank' >My Resume</a> <a href={PDF} download>Download my resume</a></p>
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
                  <p className="short_description">I created this app for the fries shop where I work as part of the Cordova course. I was able to realize all this by building a backend with PHP and the frontend with Jquery HTML and CSS. In this project I learned a lot about backend programming and database structures and this will stay with me for a long time.</p>
                  <p><a href="https://bradley.sinners.be/cordova/" target='blank'>LINK TO PROJECT</a></p>
                  
                  <p className="title_project">Requirement Analysis - UML / StarUML / Axure</p>
                  <p className="short_description">
                  For Requirement Analysis we had to compile a requirements analysis report for a fictitious customer. Throughout the process, we worked out all the aspects of the application in our report. This went from UC descriptions to UC diagrams. During this project I played an active role and tried to push my team as much as possible to get the best possible result.</p>
                  <p><a href="https://bradley.sinners.be/assets/RA_BradleyVangelder_DDA.pdf" target='blank'>LINK TO PROJECT</a></p>
                  <p className="title_project">STAR WARS WIKI - Reactjs / HTML / Bootstrap</p>
                  <p className="short_description">As a movie enthusiast is decided to make a SW wiki during my learning Reactjs learning process. While making the app I developed a knowledge about functional programming in React, React hooks and fetch calls.</p>
                  <p><a href="https://swwiki.vercel.app/" target='blank'>LINK TO PROJECT</a></p>
                </div>

                <div className="col-lg-6 col-sm-12">
                  <p className="title_project">Kwotet - Entrepreneurship</p>
                  <p className="short_description">This is project that I started on my own and have now found a partner to collaborate on developing this idea.</p>
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
