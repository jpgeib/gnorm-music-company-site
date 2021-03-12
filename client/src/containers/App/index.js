import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import LiveMusic from "../../pages/LiveMusic";
import OutsideChance from "../../components/OutsideChance";
import DNR from "../../components/DNR";
import Federation from "../../components/Federation";
import ShellShockt from "../../components/ShellShockt"; 
import ProGear from "../../pages/ProGear";
import Shows from "../../pages/Shows";
import Contact from "../../pages/Contact";
import Footer from "../../components/Footer";
import Audix from "../../components/Audix";
import Guytron from "../../components/Guytron";
import BoomerangMusic from "../../components/BoomerangMusic";
import RadianAudio from "../../components/RadianAudio";
import GeorgeLs from "../../components/GeorgeLs";
import WeberVST from "../../components/WeberVST";

class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        
        <Route exact path="/home" component={Home} />
        <Route exact path="/livemusic" component={LiveMusic} />
        <Route exact path="/livemusic/outsidechance" component={OutsideChance} />
        <Route exact path="/livemusic/federation" component={Federation} />
        <Route exact path="/livemusic/dnr" component={DNR} />
        <Route exact path="/livemusic/shellshockt" component={ShellShockt} />
        <Route exact path="/progear" component={ProGear} />
        <Route exact path="/progear/audix" component={Audix} />
        <Route exact path="/progear/guytron" component={Guytron} />
        <Route exact path="/progear/boomerang" component={BoomerangMusic} />
        <Route exact path="/progear/radian" component={RadianAudio} />
        <Route exact path="/progear/georgeLs" component={GeorgeLs} />
        <Route exact path="/progear/weber" component={WeberVST} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </>
    )
  }
}

export default App;