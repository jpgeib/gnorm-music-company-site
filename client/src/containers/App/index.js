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
import { subNavStyle, contactInfoStyle, proGearStyle, liveMusicStyle } from "../../styles";
import "./style.css";

class App extends Component {
  render() {

    const location = this.props.history.location.pathname;

    return (
      <>
        <Navbar />
        <Grid style={proGearStyle.container}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <LiveMusicRoutes subNav={subNavStyle} band={liveMusicStyle} path={location} />
          <ProGearRoutes entry={proGearStyle} subNav={subNavStyle} path={location} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/contact" render={() => <Contact contactInfo={contactInfoStyle} />} />
        </Grid>
        {this.props.history.location.pathname !== "/" && <Footer />}
      </>
    )
  }
}

export default withRouter(App);