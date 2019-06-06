import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <section className="flex" id="projects">
        <div className="header waypoint" data-animation="slide-in-right">
          PROJECTS
        </div>
        <div
          className="header-bar waypoint"
          data-animation="slide-in-right"
          data-delay=".3s"
        />
        <div className="filter-wrap waypoint" data-animation="fade-in">
          <div className="flex row">
            <div className="filter" data-filter="all">
              ALL
            </div>
            <div className="filter" data-filter=".node">
              NODE.JS
            </div>
            <div className="filter" data-filter=".php">
              PHP
            </div>
            {/* <!-- <div className="filter" data-filter=".js">JAVASCRIPT</div> --> */}
          </div>
          <div className="float-bar">
            <div className="flex row">
              <div className="filter" data-filter="all">
                ALL
              </div>
              <div className="filter" data-filter=".node">
                NODE.JS
              </div>
              <div className="filter" data-filter=".php">
                PHP
              </div>
              {/* <!-- <div className="filter" data-filter=".js">JAVASCRIPT</div> --> */}
            </div>
          </div>
        </div>
        <div id="gallery" className="container flex row wrap waypoint">
          <div className="mix php" data-my-order="1">
            <div>
              <div className="card" />
              <div className="text">
                <div className="bold">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.wholesalebox.in"
                  >
                    Wholesalebox
                  </a>
                </div>
                <span className="highlight">Opencart PHP</span>
              </div>
              {/*<div className="button" id="walker">
                LEARN MORE
              </div>*/}
            </div>
          </div>
          <div className="mix node" data-my-order="1">
            <div>
              <div className="card" />
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
              <div className="card" />
              <div className="text">
                <div className="bold">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.carpathy.com"
                  >
                    Carpathy
                  </a>
                </div>
                <span className="highlight">Symfony PHP</span>
              </div>
              {/* <!-- <div className="button" id="powur">LEARN MORE</div> --> */}
            </div>
          </div>
          <div className="mix node" data-my-order="1">
            <div>
              <div className="card" />
              <div className="text">
                <div className="bold">Chat Bot</div>
                <span className="highlight">Node + LUIS</span>
              </div>
              {/* <!-- <div className="button" id="themall">LEARN MORE</div> --> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
