import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import JeffBio from "../../../components/Bios/JeffBio";
import PegBio from "../../../components/Bios/PegBio";
import MikeBio from "../../../components/MikeBio";
import JimBio from "../../../components/JimBio";

class OutsideChance extends Component {
    render() {

        const { bios } = this.props;

        return (
            <>
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
            </>
        );
    }
};

export default OutsideChance;