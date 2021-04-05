import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { livemusicText } from "../../text";
import OutsideChance from "../../assets/images/336_OutsideChance1.JPG";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";

import "./style.css";

class LiveMusic extends Component {
    render() {
        return (
            <>
                <Grid id="live-container">
                    <LiveMusicNavbar style={this.props.style} />
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image as={Link} to="/livemusic/outsidechance" size="medium" src={OutsideChance} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="live-header" as="h2">Live Music</Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="live-text" as="h3">{livemusicText.main}</Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default LiveMusic;