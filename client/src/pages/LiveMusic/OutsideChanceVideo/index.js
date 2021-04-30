import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import CantGetEnough from "../../../components/Videos/CantGetEnough";
import FootLoose from "../../../components/Videos/FootLoose";
import SignedSealed from "../../../components/Videos/SignedSealed";

class OutsideChanceVideo extends Component {
    render() {

        const { text, video } = this.props.band;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header style={text} as="h1">Outside Chance Videos</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <FootLoose font={text} video={video} />
                </Grid.Row>
                <Grid.Row>
                    <SignedSealed font={text} video={video} />
                </Grid.Row>
                <Grid.Row>
                    <CantGetEnough font={text} video={video} />
                </Grid.Row>
            </>
        );
    }
}

export default OutsideChanceVideo;