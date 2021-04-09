import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";
import MississippiQueen from "./MississippiQueen";
import ZiggyStardust from "./ZiggyStardust";
import FlirtinDisaster from "./FlirtinDisaster";
import CantHelpFalling from "./CantHelpFalling";

class FederationVideo extends Component {
    render() {
        return (
            <>
                <Grid style={this.props.band.container}>
                    <LiveMusicNavbar subNav={this.props.subNav} />
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as="h1">The Federation Videos</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <MississippiQueen video={this.props.band.video} />
                    </Grid.Row>
                    <Grid.Row>
                        <ZiggyStardust video={this.props.band.video} />
                    </Grid.Row>
                    <Grid.Row>
                        <FlirtinDisaster video={this.props.band.video} />
                    </Grid.Row>
                    <Grid.Row>
                        <CantHelpFalling video={this.props.band.video} />
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default FederationVideo;