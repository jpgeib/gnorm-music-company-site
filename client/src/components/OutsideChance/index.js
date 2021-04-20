import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { bios } from "../../text";
import JeffBio from "./JeffBio";
import PegBio from "./PegBio";
import MikeBio from "./MikeBio";
import JimBio from "../Federation/JimBio";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";

class OutsideChance extends Component {
    render() {
        return (
            <>
                <Grid style={this.props.band.container}>
                    <Grid.Row centered>
                        <Grid.Column width={10}>
                            <LiveMusicNavbar subNav={this.props.subNav} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h1">Outside Chance</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <JeffBio jeff={bios.oc.jeff} />
                    </Grid.Row>
                    <Grid.Row>
                        <PegBio peg={bios.oc.peg} />
                    </Grid.Row>
                    <Grid.Row>
                        <MikeBio mike={bios.oc.mike} />
                    </Grid.Row>
                    <Grid.Row>
                        <JimBio jim={bios.fed.jim} />
                    </Grid.Row>

                </Grid>
            </>
        );
    }
};

export default OutsideChance;