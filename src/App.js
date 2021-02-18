import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

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
          <p>I'm Bradley Vangelder, 19 Years, student at Thomas More Geel. A passionate developer and a big movie enthusiast. In my free time I like to broaden my programming knowledge, play guitar and get just get some personal projects done. I'm a really social person and love to work in group to expand my contact portfolio.</p>
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
                <p className="title_resume">Education</p>
                <p className="title_project">TECHNISCH HEILIG HARTINSTITUUT Multi-Media | June 2018 - 2019</p>
                <p className="short_description">In this education I got a broad package of courses for graphic design and physical drawing to web design. During that time I developed a feel for the colors and personal designing style (minimalistic).</p>
                <p className="title_project">THOMAS MORE KEMPEN ApplicationDevelopment | 2019</p>
                <p className="short_description">Still going on...</p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="title_resume">Projects</p>
                <p className="title_project">STAATLICHE MUSEEN ZU BERLIN
                graphic design: Photographic Memories – Nubia around 1900 | 2019</p>
                <p className="short_description">In my previous education, I gained experience by going on a foreign internship in Berlin for 3 weeks. During this project, I created the marketing and graphic design around an event they would be hosting in Spring 2021. Eventually I learned to work in group, a local graphic design team, also I learned to work with a client's standard but still bring my actual touch to the work.</p>
                <p><a href="https://www.behance.net/gallery/113646773/Poster-design-Neues-museum">LINK TO PROJECT</a></p>
                
                <p className="title_project">LUANA LOUNGE
                graphic design: company branding | 2019</p>
                <p className="short_description">
                During my last year in my previous education I made a full branding on a non existing company.
                In the process of making the branding I developed myself in the culture of beach bars from all over the world. I made close to 150 sketches and finally came to a result I am very pleased with. In the logo you find a more Beachy style with the sun and palm leaf outlining, but still it still keeps the minimalistic look.</p>
                <p><a href="https://www.behance.net/gallery/113252385/Luana-Lounge-Branding">LINK TO PROJECT</a></p>
                <p className="title_project">STAR WARS WIKI - Reactjs / HTML / Bootstrap</p>
                <p className="short_description">As a movie enthusiast is decided to make a SW wiki during my learning Reactjs learning process. While making the app I developed a knowledge about functional programming in React, React hooks and fetch calls.</p>
                <p><a href="https://github.com/BradleyVangelder/StarWarsWiki">LINK TO PROJECT</a></p>
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
    </div>
  );
}

export default App;
