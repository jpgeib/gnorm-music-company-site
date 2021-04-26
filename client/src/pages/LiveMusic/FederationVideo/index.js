import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import MississippiQueen from "../../../components/Videos/MississippiQueen";
import ZiggyStardust from "../../../components/Videos/ZiggyStardust";
import FlirtinDisaster from "../../../components/Videos/FlirtinDisaster";
import CantHelpFalling from "../../../components/Videos/CantHelpFalling";

class FederationVideo extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default FederationVideo;