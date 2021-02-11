import React, {useState} from 'react';
import me from './pictures/me.jpg';
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
          <p>I'm Bradley Vangelder, 19 Years, student at Thomas More Geel. In my free time i like to workout, play guitar, level my self up in graphic design and get just get some personal projects done. I'm a really social person and love to work in group to expand my contact portfolio.</p>
          <img src={me} alt=""/>
          <p className="back" onClick={() => setShow('close')}>
            <span className="material-icons">
              west
            </span>
          </p>
        </div>

        <div className={show === 'contact' ? 'slide_left_container container_modal container': 'none'}>
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

        <div className="resume-height">
          <div className={show === 'resume' ? 'slide_left_container container_modal container resume': 'none'}>
            <h3>Resume</h3>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <p className="title_resume">Education</p>
                <p>TECHNISCH HEILIG HARTINSTITUUT Multi-Media | June 2018 - 2019</p>
                <p className="short_description">In my previous education, I gained experience by going on a foreign internship in Berlin for 3 weeks. During this project, I created the marketing and graphic design around an event they would be hosting in Spring 2021. Eventually I learned to work in group, a local graphic design team, also I learned to work to a client's standards but still bring my actual touch to the work.</p>
                <p>THOMAS MORE KEMPEN ApplicationDevelopment | 2019</p>
                <p className="short_description">In my previous education, I gained experience by going on a foreign internship in Berlin for 3 weeks. During this project, I created the marketing and graphic design around an event they would be hosting in Spring 2021. Eventually I learned to work in group, a local graphic design team, also I learned to work to a client's standards but still bring my actual touch to the work.</p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <p className="title_resume">Projects</p>
                <p>STAATLICHE MUSEEN ZU BERLIN
                graphic design: Photographic Memories – Nubia around 1900 | 2019</p>
                <p className="short_description">In my previous education, I gained experience by going on a foreign internship in Berlin for 3 weeks. During this project, I created the marketing and graphic design around an event they would be hosting in Spring 2021. Eventually I learned to work in group, a local graphic design team, also I learned to work to a client's standards but still bring my actual touch to the work.</p>
                <p>LUANA LOUNGE
                graphic design: company branding | 2019</p>
                <p className="short_description">In my previous education, I gained experience by going on a foreign internship in Berlin for 3 weeks. During this project, I created the marketing and graphic design around an event they would be hosting in Spring 2021. Eventually I learned to work in group, a local graphic design team, also I learned to work to a client's standards but still bring my actual touch to the work.</p>
                <p><a href="https://www.behance.net/gallery/113252385/Luana-Lounge-Branding">LINK TO PROJECT</a></p>
                <p>SNACK BAR FRITZ Studentjob</p>
                <p className="short_description">For my student job I work at least 3 times during the week combined with the school work that comes with it. I work in the hospitality industry so I am among people a lot, which also makes me social and that I can deal well with people/customers. In this I learn that I have to be friendly at all times and I am faced with a lot of time pressure in this profession.</p>
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
