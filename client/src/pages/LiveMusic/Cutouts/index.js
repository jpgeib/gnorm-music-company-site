import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import JimBio from "../../../components/Bios/JimBio";
import DariaBio from "../../../components/Bios/DariaBio";
import DaveBio from "../../../components/Bios/DaveBio";

class Cutouts extends Component {
    render() {

        const { cut, fed } = this.props.bios;
        const { band } = this.props;
        
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header style={band.text} as="h1">The Cut-Outs</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <DariaBio band={band} daria={cut.daria} />
                </Grid.Row>
                <Grid.Row>
                    <DaveBio band={band} dave={cut.dave} />
                </Grid.Row>
                <Grid.Row>
                    <JimBio band={band} jim={fed.jim} />
                </Grid.Row>
            </>
        );
    }
};

export default Cutouts;