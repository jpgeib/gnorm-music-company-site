import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import MississippiQueen from "../../../components/Videos/MississippiQueen";
import ZiggyStardust from "../../../components/Videos/ZiggyStardust";
import FlirtinDisaster from "../../../components/Videos/FlirtinDisaster";
import CantHelpFalling from "../../../components/Videos/CantHelpFalling";

class FederationVideo extends Component {
    render() {

        const { text, video } = this.props.band;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header style={text} as="h1">The Federation Videos</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <MississippiQueen font={text} video={video} />
                </Grid.Row>
                <Grid.Row>
                    <ZiggyStardust font={text} video={video} />
                </Grid.Row>
                <Grid.Row>
                    <FlirtinDisaster font={text} video={video} />
                </Grid.Row>
                <Grid.Row>
                    <CantHelpFalling font={text} video={video} />
                </Grid.Row>
            </>
        );
    }
}

export default FederationVideo;