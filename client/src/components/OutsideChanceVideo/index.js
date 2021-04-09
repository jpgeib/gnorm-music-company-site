import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";
import CantGetEnough from "./CantGetEnough";
import FootLoose from "./FootLoose";
import SignedSealed from "./SignedSealed";

class OutsideChanceVideo extends Component {
    render() {
        return (
            <>
                <Grid style={this.props.band.container}>
                    <LiveMusicNavbar subNav={this.props.subNav} />
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as="h1">Outside Chance Videos</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <FootLoose video={this.props.band.video} />
                    </Grid.Row>
                    <Grid.Row>
                        <SignedSealed video={this.props.band.video} />
                    </Grid.Row>
                    <Grid.Row>
                        <CantGetEnough video={this.props.band.video} />
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default OutsideChanceVideo;