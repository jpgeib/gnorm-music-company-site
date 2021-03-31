import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { bios } from "../../text";
import BandNavbar from "../../containers/BandNavbar";
import ShellyBio from "./ShellyBio";
import RonBio from "./RonBio";
import HansBio from "./HansBio";
import JayBio from "./JayBio";

import "./style.css";

class ShellShockt extends Component {
    render() {
        return (
            <>
                <Grid id="shell-container">
                    <BandNavbar />
                    <Grid.Row>
                        <Header id="shell-header" as="h1">ShellShockt</Header>
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
                </Grid>
            </>
        );
    }
};

export default ShellShockt;