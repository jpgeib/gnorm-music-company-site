import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import Audix from "../../components/Audix";
import Guytron from "../../components/Guytron";
import BoomerangMusic from "../../components/BoomerangMusic";
import RadianAudio from "../../components/RadianAudio";
import GeorgeLs from "../../components/GeorgeLs";
import WeberVST from "../../components/WeberVST";
import ProGearNavbar from "../../containers/ProGearNavbar";
import { progearText } from "../../text";

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
                    <ProGearNavbar />
                    {/* <Audix audixText={progearText.audix} /> */}
                    <Guytron guytronText={progearText.guytron} />
                    <BoomerangMusic boomerangText={progearText.boomerang} />
                    <RadianAudio radianText={progearText.radian} />
                    <GeorgeLs georgeLsText={progearText.georgeLs} />
                    <WeberVST weberText={progearText.weber} />
                </Grid>
            </>
        );
    }
}

export default ProGear;