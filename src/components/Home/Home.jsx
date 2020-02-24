import React, { Component } from "react";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Images from "../Images/Images";
import Photography from "../Photography/Photography";
import Projects from "../Projects/Projects";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="overflow-wrap">
          <Header />
          <About />
          <Projects />
          <Photography />
          <Contact />
          <Footer />
        </div>
        <Images />
      </div>
    );
  }
}

export default Home;
