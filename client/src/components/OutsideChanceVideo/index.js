import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import BandNavbar from "../../containers/BandNavbar";
import CantGetEnough from "./CantGetEnough";
import FootLoose from "./FootLoose";
import SignedSealed from "./SignedSealed";

import "./style.css";

class OutsideChanceVideo extends Component {
    render() {
        return (
            <>
                <Grid id="oc-video-container">
                    <BandNavbar />
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="oc-video-header" as="h1">Outside Chance Videos</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <FootLoose />
                    </Grid.Row>
                    <Grid.Row>
                        <SignedSealed />
                    </Grid.Row>
                    <Grid.Row>
                        <CantGetEnough />
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default OutsideChanceVideo;