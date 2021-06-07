import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import JeffBio from "../../../components/Bios/JeffBio";
import PegBio from "../../../components/Bios/PegBio";
import MikeBio from "../../../components/Bios/MikeBio";
import JimBio from "../../../components/Bios/JimBio";

class OutsideChance extends Component {
    render() {

        const { bios, band } = this.props;

        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header style={band.text} as="h1">Outside Chance</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <JeffBio band={band} jeff={bios.oc.jeff} />
                </Grid.Row>
                <Grid.Row>
                    <PegBio band={band} peg={bios.oc.peg} />
                </Grid.Row>
                <Grid.Row>
                    <MikeBio band={band} mike={bios.oc.mike} />
                </Grid.Row>
                <Grid.Row>
                    <JimBio band={band} jim={bios.fed.jim} />
                </Grid.Row>
            </>
        );
    }
};

export default OutsideChance;