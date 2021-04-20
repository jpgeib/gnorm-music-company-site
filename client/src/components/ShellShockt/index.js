import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { bios } from "../../text";
import ShellyBio from "./ShellyBio";
import RonBio from "./RonBio";
import HansBio from "./HansBio";
import JayBio from "./JayBio";

class ShellShockt extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                       <Header as="h1">ShellShockt</Header> 
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <ShellyBio shelly={bios.shell.shelly} />
                </Grid.Row>
                <Grid.Row>
                    <RonBio ron={bios.shell.ron} />
                </Grid.Row>
                <Grid.Row>
                    <HansBio hans={bios.shell.hans} />
                </Grid.Row>
                <Grid.Row>
                    <JayBio jay={bios.shell.jay} />
                </Grid.Row>
            </>
        );
    }
};

export default ShellShockt;