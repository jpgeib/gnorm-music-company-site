import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Navbar from "../Navbar";
import LandingPage from '../../pages/LandingPage';
import Home from "../../pages/Home";
import LiveMusicRoutes from "../../routes/LiveMusicRoutes";
import ProGearRoutes from "../../routes/ProGearRoutes";
import Shows from "../../pages/Shows";
import Contact from "../../pages/Contact";
import Footer from "../../components/Footer";
import { placeholderText, livemusicText, progearText, showsText, bios } from "../../text";
import { subNavStyle, contactStyle, proGearStyle, liveMusicStyle } from "../../styles";
import "./style.css";

class App extends Component {
  render() {

    const location = this.props.history.location.pathname;

    return (
      <>
        <Navbar />
        <Grid style={proGearStyle.container}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" render={() => <Home temp={placeholderText} />}  />
          <LiveMusicRoutes bios={bios} text={livemusicText} subNav={subNavStyle} band={liveMusicStyle} path={location} />
          <ProGearRoutes text={progearText} entry={proGearStyle} subNav={subNavStyle} path={location} />
          <Route exact path="/shows" render={() => <Shows text={showsText}/>} />
          <Route exact path="/contact" render={() => <Contact contactInfo={contactStyle} />} />
        </Grid>
        {location !== "/" && <Footer />}
      </>
    )
  }
}

export default withRouter(App);