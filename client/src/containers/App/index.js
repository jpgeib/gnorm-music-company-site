import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import Navbar from "../Navbar";
import LandingPage from '../../pages/LandingPage';
import Home from "../../pages/Home";
import LiveMusicRoutes from "../../routes/LiveMusicRoutes";
import ProGearRoutes from "../../routes/ProGearRoutes";
import Shows from "../../pages/Shows";
import Contact from "../../pages/Contact";
import Footer from "../../components/Footer";
import { subNavStyle, contactInfoStyle, progearEntryStyle, bandPageStyle } from "../../styles";
import "./style.css";

class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <LiveMusicRoutes subNav={subNavStyle} band={bandPageStyle} />
        <ProGearRoutes entry={progearEntryStyle} subNav={subNavStyle} />
        <Route exact path="/shows" component={Shows} />
        <Route exact path="/contact" render={ () => <Contact contactInfo={contactInfoStyle} /> } />
        {this.props.history.location.pathname !== "/" && <Footer />}
      </>
    )
  }
}

export default withRouter(App);