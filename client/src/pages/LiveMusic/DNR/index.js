import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import LynnBio from "../../../components/Bios/LynnBio";
import AndrewBio from "../../../components/Bios/AndrewBio";
import FredBio from "../../../components/Bios/FredBio";
import BobBio from "../../../components/Bios/BobBio";
import KevinBio from "../../../components/Bios/KevinBio";
import RichBio from "../../../components/Bios/RichBio";

class DNR extends Component {
    render() {

        const { bios, band } = this.props;
        
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header style={band.text} as="h1">DNR</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <LynnBio band={band} lynn={bios.dnr.lynn} />
                </Grid.Row>
                <Grid.Row>
                    <FredBio band={band} fred={bios.dnr.fred} />
                </Grid.Row>
                <Grid.Row>
                    <BobBio band={band} bob={bios.dnr.bob} />
                </Grid.Row>
                <Grid.Row>
                    <AndrewBio band={band} andrew={bios.dnr.andrew} />
                </Grid.Row>
                <Grid.Row>
                    <KevinBio band={band} kevin={bios.dnr.kevin} />
                </Grid.Row>
                <Grid.Row>
                    <RichBio band={band} rich={bios.dnr.rich} />
                </Grid.Row>
            </>
        );
    }
};

export default DNR;