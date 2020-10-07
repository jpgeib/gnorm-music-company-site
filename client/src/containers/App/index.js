import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import LiveMusic from "../../pages/LiveMusic";
import Instruction from "../../pages/Instruction";
import ProGear from "../../pages/ProGear";
import Shows from "../../pages/Shows";
import Contact from "../../pages/Contact";

class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/livemusic" component={LiveMusic} />
        <Route exact path="/instruction" component={Instruction} />
        <Route exact path="/progear" component={ProGear} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/contact" component={Contact} />
      </>
    )
  }
}

export default App;