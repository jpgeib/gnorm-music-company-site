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

        const { bios } = this.props;
        
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">DNR</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <LynnBio lynn={bios.dnr.lynn} />
                </Grid.Row>
                <Grid.Row>
                    <FredBio fred={bios.dnr.fred} />
                </Grid.Row>
                <Grid.Row>
                    <BobBio bob={bios.dnr.bob} />
                </Grid.Row>
                <Grid.Row>
                    <AndrewBio andrew={bios.dnr.andrew} />
                </Grid.Row>
                <Grid.Row>
                    <KevinBio kevin={bios.dnr.kevin} />
                </Grid.Row>
                <Grid.Row>
                    <RichBio rich={bios.dnr.rich} />
                </Grid.Row>
            </>
        );
    }
};

export default DNR;