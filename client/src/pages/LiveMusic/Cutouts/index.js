import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { bios } from "../../../text";
// import DariaBio from "./DariaBio";
// import DaveBio from "./DaveBio";
import JimBio from "../../../components/JimBio";

class Cutouts extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">The Cut-Outs</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {/* <DariaBio daria={bios.cut.daria} /> */}
                </Grid.Row>
                <Grid.Row>
                    {/* <DaveBio dave={bios.cut.dave} /> */}
                </Grid.Row>
                <Grid.Row>
                    <JimBio jim={bios.fed.jim} />
                </Grid.Row>
            </>
        );
    }
};

export default Cutouts;