import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import Navbar from "../Navbar";
import LandingPage from '../../pages/LandingPage';
import Home from "../../pages/Home";
import LiveMusic from "../../pages/LiveMusic";
import OutsideChance from "../../components/OutsideChance";
import OutsideChanceVideo from '../../components/OutsideChanceVideo';
import DNR from "../../components/DNR";
import Federation from "../../components/Federation";
import FederationVideo from '../../components/FederationVideo';
import ShellShockt from "../../components/ShellShockt";
import Cutouts from '../../components/Cutouts'; 
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

import { subNavStyle, contactInfoStyle, progearEntryStyle, bandPageStyle } from "../../styles";
import "./style.css";

class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/livemusic" render={ () => <LiveMusic subNav={subNavStyle} band={bandPageStyle} /> } />
        <Route exact path="/livemusic/outsidechance" render={ () => <OutsideChance band={bandPageStyle} subNav={subNavStyle} /> } />
        <Route exact path="/livemusic/outsidechance/videos" render={ () => <OutsideChanceVideo band={bandPageStyle} subNav={subNavStyle} /> } />
        <Route exact path="/livemusic/federation" render={ () => <Federation band={bandPageStyle} subNav={subNavStyle} /> } />
        <Route exact path="/livemusic/federation/videos" render={ () => <FederationVideo band={bandPageStyle} subNav={subNavStyle} /> } />
        <Route exact path="/livemusic/dnr" render={ () => <DNR band={bandPageStyle} subNav={subNavStyle} /> } />
        <Route exact path="/livemusic/shellshockt" render={ () => <ShellShockt band={bandPageStyle} subNav={subNavStyle} /> } />
        <Route exact path="/livemusic/cutouts" render={ () => <Cutouts band={bandPageStyle} subNav={subNavStyle} /> } />
        <Route exact path="/progear" render={ () => <ProGear subNav={subNavStyle} /> } />
        <Route exact path="/progear/audix" render={ () => <Audix entry={progearEntryStyle} subNav={subNavStyle} /> } />
        <Route exact path="/progear/guytron" render={ () => <Guytron entry={progearEntryStyle} subNav={subNavStyle} /> } />
        <Route exact path="/progear/boomerang" render={ () => <BoomerangMusic entry={progearEntryStyle} subNav={subNavStyle} /> } />
        <Route exact path="/progear/radian" render={ () => <RadianAudio entry={progearEntryStyle} subNav={subNavStyle} /> } />
        <Route exact path="/progear/georgeLs" render={ () => <GeorgeLs entry={progearEntryStyle} subNav={subNavStyle} /> } />
        <Route exact path="/progear/weber" render={ () => <WeberVST entry={progearEntryStyle} subNav={subNavStyle} /> } />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/contact" render={ () => <Contact contactInfo={contactInfoStyle} /> } />
        {this.props.history.location.pathname !== "/" && <Footer />}
      </>
    )
  }
}

export default withRouter(App);