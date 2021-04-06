import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";
import MississippiQueen from "./MississippiQueen";
import ZiggyStardust from "./ZiggyStardust";
import FlirtinDisaster from "./FlirtinDisaster";
import CantHelpFalling from "./CantHelpFalling";

import "./style.css";

class FederationVideo extends Component {
    render() {
        return (
            <>
                <Grid id="fed-video-container">
                    <LiveMusicNavbar subNav={this.props.subNav} />
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="fed-video-header" as="h1">The Federation Videos</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <MississippiQueen />
                    </Grid.Row>
                    <Grid.Row>
                        <ZiggyStardust />
                    </Grid.Row>
                    <Grid.Row>
                        <FlirtinDisaster />
                    </Grid.Row>
                    <Grid.Row>
                        <CantHelpFalling />
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default FederationVideo;