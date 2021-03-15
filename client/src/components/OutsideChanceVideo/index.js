import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import OutsideChanceNavbar from "../../containers/OutsideChanceNavbar";

import "./style.css";

class OutsideChanceVideo extends Component {
    render() {
        return (
            <>
                <Grid id="oc-video-container">
                    <OutsideChanceNavbar />
                    <Header id="oc-video-header" as="h1">Outside Chance Videos</Header>
                </Grid>
            </>
        );
    }
}

export default OutsideChanceVideo;