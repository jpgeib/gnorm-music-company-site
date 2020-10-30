import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import OutsideChance from "../../assets/images/336_OutsideChance1.JPG";
import DNR from "../../assets/images/DNR-group.jpg";
import Federation from "../../assets/images/fedpb.jpg";
import Placeholder from "../../assets/images/Dethklokband.png";

import "./style.css";

class LiveMusic extends Component {
    render() {
        return (
            <>
                <Grid id="live-header-container">
                    <Grid.Column width={16}>
                        <Header id="live-header" as="h1">These are the bands I work with most. Between them, we cover everything from Heavy Metal to Frank Sinatra.</Header>
                    </Grid.Column>
                </Grid>
                <Grid id="live-container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={OutsideChance} />
                            <Header id="oc-header" as="h3">Outside Chance</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image size="medium" src={DNR} />
                            <Header id="dnr-header" as="h3">DNR</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={Federation} />
                            <Header id="fed-header" as="h3">The Federation</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image size="medium" src={Placeholder} />
                            <Header id="shell-header" as="h3">ShellShockt</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default LiveMusic;