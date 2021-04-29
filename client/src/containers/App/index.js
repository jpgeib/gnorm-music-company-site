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
import { websiteText } from "../../text";
import { websiteStyle } from "../../styles";
import "./style.css";

class App extends Component {
  render() {

    const location = this.props.history.location.pathname;

    return (
      <>
        <Navbar nav={websiteStyle.mainNavStyle} />
        <Grid style={websiteStyle.proGearStyle.container}>
          <Route exact path="/" render={() => <LandingPage land={websiteStyle.landingStyle} />} />
          <Route exact path="/home" render={() => <Home home={websiteStyle.homeStyle} temp={websiteText.placeholderText} />}  />
          <LiveMusicRoutes text={websiteText.livemusicText} subNav={websiteStyle.subNavStyle} band={websiteStyle.liveMusicStyle} path={location} />
          <ProGearRoutes text={websiteText.progearText} entry={websiteStyle.proGearStyle} subNav={websiteStyle.subNavStyle} path={location} />
          <Route exact path="/shows" render={() => <Shows shows={websiteStyle.showStyle} text={websiteText.showsText}/>} />
          <Route exact path="/contact" render={() => <Contact contact={websiteStyle.contactStyle} />} />
        </Grid>
        {location !== "/" && <Footer footer={websiteStyle.footerStyle} />}
      </>
    )
  }
}

export default withRouter(App);