import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ShellyBio from "../../../components/ShellyBio";
import RonBio from "../../../components/RonBio";
import HansBio from "../../../components/HansBio";
import JayBio from "../../../components/JayBio";

class ShellShockt extends Component {
    render() {

        const { bios } = this.props;
        
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