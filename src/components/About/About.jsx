import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container flex">
          <div className="header waypoint" data-animation="slide-in-left">
            ABOUT
          </div>
          <div
            className="header-bar waypoint"
            data-animation="slide-in-left"
            data-delay=".5s"
          />
          <div className="flex row label-wrap">
            <div className="flex row-gt-sm">
              <div className="flex bullet-wrap ">
                <div className="hex-wrap waypoint" data-animation="flip-in-x">
                  <div className="hexagon">
                    <i
                      className="mdi mdi-speedometer"
                      style={{ marginTop: "16px" }}
                    />
                  </div>
                </div>
                <div className="waypoint" data-animation="fade-in">
                  <div className="label bold">Fast</div>
                  <div>
                    Fast load times and lag free interaction, my highest
                    priority.
                  </div>
                </div>
              </div>
              <div className="flex bullet-wrap ">
                <div
                  className="hex-wrap waypoint"
                  data-animation="flip-in-x"
                  data-delay=".2s"
                >
                  <div className="hexagon">
                    <i
                      className="mdi mdi-cellphone-link"
                      style={{ marginTop: "16px" }}
                    />
                  </div>
                </div>
                <div
                  className="waypoint"
                  data-animation="fade-in"
                  data-delay=".2s"
                >
                  <div className="label bold">Responsive</div>
                  <div>I am Writing a code for big or small devices.</div>
                </div>
              </div>
            </div>
            <div className="flex row-gt-sm">
              <div className="flex bullet-wrap ">
                <div
                  className="hex-wrap waypoint"
                  data-animation="flip-in-x"
                  data-delay=".4s"
                >
                  <div className="hexagon">
                    <i
                      className="mdi mdi-lightbulb-outline"
                      style={{ marginTop: "16px" }}
                    />
                  </div>
                </div>
                <div
                  className="waypoint"
                  data-animation="fade-in"
                  data-delay=".4s"
                >
                  <div className="label bold">Intuitive</div>
                  <div>
                    Strong preference for easy to use. intuitive Code and
                    Design.
                  </div>
                </div>
              </div>
              <div className="flex bullet-wrap ">
                <div
                  className="hex-wrap waypoint"
                  data-animation="flip-in-x"
                  data-delay=".6s"
                >
                  <div className="hexagon">
                    <i
                      className="mdi mdi-rocket"
                      style={{ marginTop: "16px" }}
                    />
                  </div>
                </div>
                <div
                  className="waypoint"
                  data-animation="fade-in"
                  data-delay=".6s"
                >
                  <div className="label bold">Dynamic</div>
                  <div>
                    Websites don't have to be static, I love making pages come
                    to life.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-wrapper flex row-gt-sm">
            <div
              className="flex flex-50-gt-sm waypoint"
              data-animation="slide-in-left"
            >
              <img src="img/garvit/IMG_20181117_201320.jpg" className="me" alt="garvit_img" />
              {/* <!-- <div><img className="up-arrow" src="img/up-arrow.png"></div> --> */}
              <div className="label bold">Who's this guy?</div>
              <div>
                I'm Automation Engineer for{" "}
                <a
                  className="highlight"
                  href="http://www.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adobe Systems{" "}
                </a>
                in India, IN.
                <br />
                I have serious passion for Coding, Design, Gaming and Dynamic
                user experiences.
                <br />
                <span className="page-link highlight" dest="contact">
                  Let's make something special.
                </span>
              </div>
            </div>
            <div
              className="flex flex-50-gt-sm waypoint bars-wrap"
              data-animation="slide-in-right"
            >
              <div className="bar flex">
                <div className="bar fill" style={{ width: "80%" }}>
                  <div className="tag bold flex">HTML/CSS/Bootstrap</div>
                </div>
                <span>80%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={{ width: "80%" }}>
                  <div className="tag bold flex">JavaScript/jQuery</div>
                </div>
                <span>80%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={{ width: "70%" }}>
                  <div className="tag bold flex">Node.js/React/Angular</div>
                </div>
                <span>70%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={{ width: "70%" }}>
                  <div className="tag bold flex">PHP</div>
                </div>
                <span>70%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={{ width: "70%" }}>
                  <div className="tag bold flex">MYSQL/MONGO/Redis</div>
                </div>
                <span>70%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={{ width: "60%" }}>
                  <div className="tag bold flex">Shell Script/GIT</div>
                </div>
                <span>60%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={{ width: "55%" }}>
                  <div className="tag bold flex">RabbitMQ/SOLR</div>
                </div>
                <span>55%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={{ width: "50%" }}>
                  <div className="tag bold flex">AWS/GCP/Azure</div>
                </div>
                <span>50%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={{ width: "45%" }}>
                  <div className="tag bold flex">Jenkins/Docker</div>
                </div>
                <span>40%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
