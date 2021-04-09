import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { bios } from "../../text";
import LynnBio from "./LynnBio";
import AndrewBio from "./AndrewBio";
import FredBio from "./FredBio";
import BobBio from "./BobBio";
import KevinBio from "./KevinBio";
import RichBio from "./RichBio";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";

class DNR extends Component {
    render() {
        return (
            <>
                <Grid style={this.props.band.container}>
                    <LiveMusicNavbar subNav={this.props.subNav} />
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
                </Grid>
            </>
        );
    }
};

export default DNR;