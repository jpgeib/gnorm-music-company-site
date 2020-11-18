import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import LiveMusic from "../../pages/LiveMusic";
import OutsideChance from "../../pages/LiveMusic/OutsideChance";
import DNR from "../../pages/LiveMusic/DNR";
import Federation from "../../pages/LiveMusic/Federation";
import ShellShockt from "../../pages/LiveMusic/ShellShockt"; 
import ProGear from "../../pages/ProGear";
import Shows from "../../pages/Shows";
import Contact from "../../pages/Contact";
import Footer from "../../components/Footer";

class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/livemusic" component={LiveMusic} />
        <Route exact path="/livemusic/outsidechance" component={OutsideChance} />
        <Route exact path="/livemusic/federation" component={Federation} />
        <Route exact path="/livemusic/dnr" component={DNR} />
        <Route exact path="/livemusic/shellshockt" component={ShellShockt} />
        <Route exact path="/progear" component={ProGear} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </>
    )
  }
}

export default App;