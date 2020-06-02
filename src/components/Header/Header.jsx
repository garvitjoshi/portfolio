import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      /* <!-- Header --> */
      <section id="header" className="flex height-fix">
        <div id="pt" className="canvas" />
        <div className="flex">
          <div className="text">
            Hello, I'm <span className="highlight">Garvit Joshi</span>.
            <br />
            I'm a full-stack developer.
          </div>
          <div className="button page-link" dest="about">
            View my work <i className="mdi mdi-arrow-right" />
          </div>
          <nav className="flex">
            <div className="link-wrap">
              <div className="active page-link" dest="header">
                Home
              </div>
              <div className="page-link" dest="about">
                About
              </div>
              <div className="page-link" dest="projects">
                Projects
              </div>
              {/*<div className="page-link" dest="photography">
                Photography
              </div>*/}
              <div className="page-link" dest="contact">
                contact
              </div>
              <div className="page-link" dest="resume">
              <a target="_blank" href="/Garvit_Resume.pdf">Resume</a>
              </div>
            </div>
            <i className="mdi mdi-menu" />
          </nav>
        </div>
      </section>
    );
  }
}

export default Header;
