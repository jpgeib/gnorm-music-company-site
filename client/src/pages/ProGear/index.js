import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import Audix from "../../components/Audix";
import Guytron from "../../components/Guytron";
import BoomerangMusic from "../../components/BoomerangMusic";
import RadianAudio from "../../components/RadianAudio";
import GeorgeLs from "../../components/GeorgeLs";
import WeberVST from "../../components/WeberVST";
import {
    progearHeader,
    progearSubheader, 
    audixText, 
    boomerangText, 
    georgeText, 
    guytronText, 
    radianText, 
    weberText 
} from "../../text";

import "./style.css";

class ProGear extends Component {
    render() {
        return(
            <>
                {/* <Grid id="progear-header-container">
                    <Grid.Column width={16}>
                        <Header id="progear-header" as="h1">{progearHeader}</Header>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Header id="progear-subheader" as="h3">{progearSubheader}</Header>
                    </Grid.Column>
                </Grid> */}
                <Grid id="progear-container">
                    <Grid.Row>
                        <Audix audixText={audixText} />
                    </Grid.Row>
                    <Grid.Row>
                        <Guytron guytronText={guytronText} />
                    </Grid.Row>
                    <Grid.Row>
                        <BoomerangMusic boomerangText={boomerangText} />
                    </Grid.Row>
                    <Grid.Row>
                        <RadianAudio radianText={radianText} />
                    </Grid.Row>
                    <Grid.Row>
                        <GeorgeLs georgeText={georgeText} />
                    </Grid.Row>
                    <Grid.Row>
                        <WeberVST weberText={weberText} />
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default ProGear;