import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import CantGetEnough from "../../../components/Videos/CantGetEnough";
import FootLoose from "../../../components/Videos/FootLoose";
import SignedSealed from "../../../components/Videos/SignedSealed";

class OutsideChanceVideo extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default OutsideChanceVideo;