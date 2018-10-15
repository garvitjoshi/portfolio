import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="overflow-wrap">
          {/* <!-- HOME --> */}
          <div className="modal-wrap flex">
            <div className="mask"></div>
            <div className="modal" id="modal">
              <div className="carousel-wrap">
                <div className="window">
                  <div id="carousel">
                  <div className="slide"></div>
                  <div className="slide"></div>
                  <div className="slide"></div>
                  </div>
                  <i className="mdi mdi-chevron-left" id="prev"></i>
                  <i className="mdi mdi-chevron-right" id="next"></i>
                </div>
              </div>
              <div className="info-box">
                <div className="title"></div>
                <div className="tag"></div>
                <div className="detail"></div>
                <a href="#home" target="_blank" rel="noopener noreferrer"><div className="button"><i className="mdi mdi-open-in-new"></i>VIEW SITE</div></a>
              </div>
              <i className="close mdi mdi-close"></i>
            </div>
          </div>
            <section id="home" className="flex height-fix">
              <div id="pt" className="canvas"></div>
              <div className="flex">
                <div className="text">
                  Hello, I'm <span className="highlight">Garvit Joshi</span>.
                  <br />
                  I'm a full-stack web developer.
                </div>
                <div className="button page-link" dest="about">View my work <i className="mdi mdi-arrow-right"></i></div>
                <nav className="flex">
                  <div className="link-wrap">
                    <div className="active page-link" dest="home">home</div>
                    <div className="page-link" dest="about">about</div>
                    <div className="page-link" dest="portfolio">portfolio</div>
                    <div className="page-link" dest="blog">blog</div>
                    <div className="page-link" dest="contact">contact</div>
                  </div>
                  <i className="mdi mdi-menu"></i>
                </nav>
              </div>
            </section>
            {/* <!-- ABOUT --> */}
            <section id="about">
              <div className="container flex">
                <div className="header waypoint" data-animation="slide-in-left">ABOUT</div>
                <div className="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s"></div>
                <div className="flex row label-wrap">
                  <div className="flex row-gt-sm">
                    <div className="flex bullet-wrap ">
                      <div className="hex-wrap waypoint" data-animation="flip-in-x">
                        <div className="hexagon">
                          <i className="mdi mdi-speedometer"></i>
                        </div>
                      </div>
                      <div className="waypoint" data-animation="fade-in">
                        <div className="label bold">Fast</div>
                        <div>Fast load times and lag free interaction, my highest priority.</div>
                      </div>
                    </div>
                    <div className="flex bullet-wrap " >
                      <div className="hex-wrap waypoint" data-animation="flip-in-x" data-delay=".2s">
                        <div className="hexagon">
                          <i className="mdi mdi-cellphone-link"></i>
                        </div>
                      </div>
                      <div className="waypoint" data-animation="fade-in" data-delay=".2s">
                        <div className="label bold">Responsive</div>
                        <div>I am Writing a code for big or small devices.</div>
                      </div>
                    </div>
                  </div>
              <div className="flex row-gt-sm">
                <div className="flex bullet-wrap " >
                  <div className="hex-wrap waypoint" data-animation="flip-in-x" data-delay=".4s">
                    <div className="hexagon">
                      <i className="mdi mdi-lightbulb-outline"></i>
                    </div>
                  </div>
                  <div className="waypoint" data-animation="fade-in" data-delay=".4s">
                    <div className="label bold">Intuitive</div>
                    <div>Strong preference for easy to use. intuitive Code and Design.</div>
                  </div>
                </div>
                <div className="flex bullet-wrap " >
                  <div className="hex-wrap waypoint" data-animation="flip-in-x" data-delay=".6s">
                    <div className="hexagon">
                      <i className="mdi mdi-rocket"></i>
                    </div>
                  </div>
                  <div className="waypoint" data-animation="fade-in" data-delay=".6s">
                    <div className="label bold">Dynamic</div>
                    <div>Websites don't have to be static, I love making pages come to life.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills-wrapper flex row-gt-sm">
              <div className="flex flex-50-gt-sm waypoint" data-animation="slide-in-left">
                <img src="img/me.png" className="me" alt="garvit_img"/>
                {/* <!-- <div><img className="up-arrow" src="img/up-arrow.png"></div> --> */}
                <div className="label bold">Who's this guy?</div>
                <div>
                  I'm Application Developer for <a className="highlight" href="http://www.adobe.com" target="_blank" rel="noopener noreferrer">Adobe Systems</a> in India, IN.
                  <br />
                  I have serious passion for Coding, Design, Gaming and dynamic user experiences.
                  <br />
                  <span className="page-link highlight" dest="contact">Let's make something special.</span>
                </div>
              </div>
              <div className="flex flex-50-gt-sm waypoint bars-wrap"  data-animation="slide-in-right">
                <div className="bar flex">
                  <div className="bar fill" style={{width:"85%"}}>
                    <div className="tag bold flex">HTML/CSS/Bootstrap</div>
                  </div>
                  <span>90%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{width:"80%"}}>
                    <div className="tag bold flex">JavaScript/jQuery</div>
                  </div>
                  <span>80%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{width:"65%"}}>
                    <div className="tag bold flex">Node.js/React</div>
                  </div>
                  <span>70%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{width:"65%"}}>
                    <div className="tag bold flex">PHP</div>
                  </div>
                  <span>70%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{width:"65%"}}>
                    <div className="tag bold flex">MYSQL/MONGO/Redis</div>
                  </div>
                  <span>70%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{width:"55%"}}>
                    <div className="tag bold flex">AWS/GCP/Azure</div>
                  </div>
                  <span>50%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{width:"60%"}}>
                    <div className="tag bold flex">Shell Script/GIT</div>
                  </div>
                  <span>60%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{width:"55%"}}>
                    <div className="tag bold flex">RabbitMQ/SOLR</div>
                  </div>
                  <span>55%</span>
                </div>
                <div className="bar flex">
                  <div className="bar fill" style={{width:"45%"}}>
                    <div className="tag bold flex">Jenkins/Docker</div>
                  </div>
                  <span>40%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- PORTFOLIO --> */}
          <section className="flex" id="portfolio">
            <div className="header waypoint" data-animation="slide-in-right">PROJECTS</div>
            <div className="header-bar waypoint" data-animation="slide-in-right" data-delay=".3s"></div>
            <div className="filter-wrap waypoint" data-animation="fade-in">
              <div className="flex row">
                <div className="filter" data-filter="all">ALL</div>
                <div className="filter" data-filter=".node">NODE.JS</div>
                <div className="filter" data-filter=".php">PHP</div>
                {/* <!-- <div className="filter" data-filter=".js">JAVASCRIPT</div> --> */}
              </div>
              <div className="float-bar">
                <div className="flex row">
                  <div className="filter" data-filter="all">ALL</div>
                  <div className="filter" data-filter=".node">NODE.JS</div>
                  <div className="filter" data-filter=".php">PHP</div>
                  {/* <!-- <div className="filter" data-filter=".js">JAVASCRIPT</div> --> */}
                </div>
              </div>
            </div>
            <div id="gallery" className="container flex row wrap waypoint">
              {/* <!-- <div className="mix js" data-my-order="1">
                <div>
                  <div className="card"></div>
                  <div className="text">
                    <div className="bold">Roambi</div>
                    <span className="highlight">Pure JavaScript</span>
                  </div>
                  <div className="button" id="roambi">LEARN MORE</div>
                </div>
              </div> --> */}
              <div className="mix php" data-my-order="1">
                <div>
                  <div className="card"></div>
                  <div className="text">
                    <div className="bold">Wholesalebox</div>
                    <span className="highlight">Opencart PHP</span>
                  </div>
                  {/* <!-- <div className="button" id="walker">LEARN MORE</div> --> */}
                </div>
              </div>
              <div className="mix node" data-my-order="1">
                <div>
                  <div className="card"></div>
                  <div className="text">
                    <div className="bold">Zingtrivia</div>
                    <span className="highlight">Node.js and Sockit.io</span>
                  </div>
                  {/* <!-- <div className="button" id="mystand">LEARN MORE</div> --> */}
                </div>
              </div>
              {/* <!-- <div className="mix js" data-my-order="1">
                <div>
                  <div className="card"></div>
                  <div className="text">
                    <div className="bold">NEVER SURRENDER</div>
                    <span className="highlight">Pure JavaScript</span>
                  </div>
                  <div className="button" id="never">LEARN MORE</div>
                </div>
              </div> --> */}
              <div className="mix php" data-my-order="1">
                <div>
                  <div className="card"></div>
                  <div className="text">
                    <div className="bold">Carpathy</div>
                    <span className="highlight">Symfony PHP</span>
                  </div>
                  {/* <!-- <div className="button" id="powur">LEARN MORE</div> --> */}
                </div>
              </div>
              <div className="mix node" data-my-order="1">
                <div>
                  <div className="card"></div>
                  <div className="text">
                    <div className="bold">Chat Bot</div>
                    <span className="highlight">Node + LUIS</span>
                  </div>
                  {/* <!-- <div className="button" id="themall">LEARN MORE</div> --> */}
                </div>
              </div>
            </div>
          </section>
        {/* <!-- BLOG --> */}
          <section id="blog">
            {/* <!-- <div className="container flex">
              <div className="header waypoint" data-animation="slide-in-left">BLOG</div>
              <div className="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s"></div>
              <div className="flex row wrap">
                <div className="flex row-gt-sm">
                  <a href="http://blog.eyecuelab.com/2016/04/29/breaking-your-coders-block/" target="_blank">
                    <div className="blog-wrap waypoint" data-animation="fade-in">
                      <div className="fade-wrap">
                        <div className="thumb" id="thumb-1"></div>
                        <div className="label bold">Breaking Your Coder's Block</div>
                        <div className="date">APRIL 29, 2016</div>
                        <div className="bar"></div>
                        <div className="text">
                          At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue...
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="http://blog.eyecuelab.com/2015/03/19/this-is-your-brain-on-caffeine/" target="_blank">
                    <div className="blog-wrap waypoint" data-animation="fade-in" data-delay=".2s">
                      <div className="fade-wrap">
                        <div className="thumb" id="thumb-2"></div>
                        <div className="label bold">!Awake: This is Your Brain on Caffeine</div>
                        <div className="date">MARCH 19, 2015</div>
                        <div className="bar"></div>
                        <div className="text">
                          If there's one thing I can truly claim to be an expert on, it's staying awake. For five years I struggled to stay employed...
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex row-gt-sm">
                  <a href="http://blog.eyecuelab.com/2015/03/04/getting-a-handle-on-handlebars/" target="_blank">
                    <div className="blog-wrap waypoint" data-animation="fade-in" data-delay=".4s">
                      <div className="fade-wrap">
                        <div className="thumb" id="thumb-3"></div>
                        <div className="label bold">Getting a Handle on Handlebars</div>
                        <div className="date">MARCH 04, 2015</div>
                        <div className="bar"></div>
                        <div className="text">
                          Here at EyeCue Lab we render most of our data-laden HTML pages in Handlebar templates...
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="http://blog.eyecuelab.com/2015/02/23/essential_extensions/" target="_blank">
                    <div className="blog-wrap waypoint" data-animation="fade-in" data-delay=".6s">
                      <div className="fade-wrap">
                        <div className="thumb" id="thumb-4"></div>
                        <div className="label bold">5 Extensions for Your Chrome Toolbelt</div>
                        <div className="date">FEBRUARY 23, 2015</div>
                        <div className="bar"></div>
                        <div className="text">
                          If you're not using Google Chrome as a front-end web developer, you're missing out. Not only is Chrome the...
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div> --> */}
          </section>
          {/* <!-- CONTACT --> */}
          <section id="contact">
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
              <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
            </svg>
            <div className="container flex">
              <div className="header waypoint" data-animation="slide-in-left">CONTACT</div>
              <div className="header-bar waypoint" data-animation="slide-in-right" data-delay=".25s"></div>
              <div className="highlight waypoint" data-animation="slide-in-right" data-delay=".5s">Have a question or want to work together?</div>
              <form className="waypoint" data-animation="pop-in" data-delay=".5s" id="contact-form">
                <input placeholder="Name" type="text" name="name" required />
                <input placeholder="Enter email" type="email" name="email" required />
                <textarea placeholder="Your Message" type="text" name="message"></textarea>
                <div id="success">
                  <div>Your message was sent successfully. Thanks!<span id="close" className="mdi mdi-close"></span></div>
                </div>
                <input className="button" type="submit" id="submit" value="SUBMIT" />
              </form>
            </div>
          </section>
          <footer>
            <i className="mdi mdi-chevron-double-up page-link" dest="home"></i>
            <div className="icon-wrap flex row">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/garvit-joshi/">
                <div className="flex icon" id="icon-2">
                  <i className="mdi mdi-linkedin"></i>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/garvitjoshi">
                <div className="flex icon" id="icon-4">
                  <i className="mdi mdi-github-box"></i>
                </div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/joshigarvit">
                <div className="flex icon" id="icon-3">
                  <i className="mdi mdi-facebook"></i>
                </div>
              </a>
            </div>
            <div className="info-box">
              <div className="footnote">GARVIT JOSHI <span className="highlight">&copy;2018</span></div>
            </div>
          </footer>
        </div>
        {/* <div id="preload">
          <img src="img/me.png" alt="garvit_img"/>
          <img src="img/filler.jpg" alt="filler"/>
          <img src="img/thumb-1.jpg" alt="thumb-1"/>
          <img src="img/thumb-2.jpg" alt="thumb-2"/>
          <img src="img/thumb-3.jpg" alt="thumb-3"/>
          <img src="img/thumb-4.jpg" alt="thumb-4"/>
          <img src="img/thumb-5.jpg" alt="thumb-5"/>
          <img src="img/thumb-6.jpg" alt="thumb-6"/>
          <img src="img/blog-1.jpg" alt="blog-1"/>
          <img src="img/blog-2.jpg" alt="blog-2"/>
          <img src="img/blog-3.jpg" alt="blog-3"/>
          <img src="img/blog-4.jpg" alt="blog-4"/>
          <img src="img/slides/mystand-0.jpg" alt="mystand-0"/>
          <img src="img/slides/mystand-1.jpg" alt="mystand-1"/>
          <img src="img/slides/mystand-2.jpg" alt="mystand-2"/>
          <img src="img/slides/never-0.jpg" alt="never-0"/>
          <img src="img/slides/never-1.jpg" alt="never-1"/>
          <img src="img/slides/never-2.jpg" alt="never-2"/>
          <img src="img/slides/powur-0.jpg" alt="powur-0"/>
          <img src="img/slides/powur-1.jpg" alt="powur-1"/>
          <img src="img/slides/powur-2.jpg" alt="powur-2"/>
          <img src="img/slides/roambi-0.jpg" alt="roambi-0"/>
          <img src="img/slides/roambi-1.jpg" alt="roambi-1"/>
          <img src="img/slides/roambi-2.jpg" alt="roambi-2"/>
          <img src="img/slides/themall-0.jpg" alt="themall-0"/>
          <img src="img/slides/themall-1.jpg" alt="themall-1"/>
          <img src="img/slides/themall-2.jpg" alt="themall-2"/>
          <img src="img/slides/walker-0.jpg" alt="walker-0"/>
          <img src="img/slides/walker-1.jpg" alt="walker-1"/>
          <img src="img/slides/walker-2.jpg" alt="walker-2"/>
        </div> */}
    </div>
    );
  }
}

export default App;
