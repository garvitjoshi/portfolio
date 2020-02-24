import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <i className="mdi mdi-chevron-double-up page-link" dest="header" />
        <div className="icon-wrap flex row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/garvit11joshi/"
          >
            <div className="flex icon" id="icon-2">
              <i className="mdi mdi-linkedin" />
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/garvitjoshi"
          >
            <div className="flex icon" id="icon-4">
              <i className="mdi mdi-github-box" />
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/garvit11joshi"
          >
            <div className="flex icon" id="icon-3">
              <i className="mdi mdi-facebook" />
            </div>
          </a>
        </div>
        <div className="info-box">
          <div className="footnote">
            GARVIT JOSHI <span className="highlight">&copy;2020</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
