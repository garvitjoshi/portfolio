import React, { Component } from "react";

class Backup extends Component {
  render() {
    return (
      <div className="modal-wrap flex">
        <div className="mask" />
        <div className="modal" id="modal">
          <div className="carousel-wrap">
            <div className="window">
              <div id="carousel">
                <div className="slide" />
                <div className="slide" />
                <div className="slide" />
              </div>
              <i className="mdi mdi-chevron-left" id="prev" />
              <i className="mdi mdi-chevron-right" id="next" />
            </div>
          </div>
          <div className="info-box">
            <div className="title" />
            <div className="tag" />
            <div className="detail" />
            <a href="#home" target="_blank" rel="noopener noreferrer">
              <div className="button">
                <i className="mdi mdi-open-in-new" />
                VIEW SITE
              </div>
            </a>
          </div>
          <i className="close mdi mdi-close" />
        </div>
      </div>
    );
  }
}

export default Backup;
