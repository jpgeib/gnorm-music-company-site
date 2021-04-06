import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { bios } from "../../text";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";
import DariaBio from "./DariaBio";
import DaveBio from "./DaveBio";
import JimBio from "../Federation/JimBio";

import "./style.css";


class Cutouts extends Component {
    render() {
        return (
            <>
                <Grid id="cut-container">
                    <LiveMusicNavbar subNav={this.props.subNav} />
                    <Grid.Row>
                        <Header id="cut-header" as="h1">The Cutouts</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <DariaBio daria={bios.cut.daria} />
                    </Grid.Row>
                    <Grid.Row>
                        <DaveBio dave={bios.cut.dave} />
                    </Grid.Row>
                    <Grid.Row>
                        <JimBio jim={bios.fed.jim} />
                    </Grid.Row>
                </Grid>
            </>
        );
    }
};

export default Cutouts;