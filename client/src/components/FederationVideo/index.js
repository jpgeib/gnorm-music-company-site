import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import FederationNavbar from "../../containers/FederationNavbar";

import "./style.css";

class FederationVideo extends Component {
    render() {
        return (
            <>
                <Grid id="fed-video-container">
                    <FederationNavbar />
                    <Header id="fed-video-header" as="h1">The Federation Videos</Header>
                </Grid>
            </>
        );
    }
}

export default FederationVideo;