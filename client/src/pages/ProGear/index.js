import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import Audix from "../../components/Audix";
import BoomerangMusic from "../../components/BoomerangMusic";

import "./style.css";

class ProGear extends Component {
    render() {
        return(
            <>
                <Grid id="progear-header-container">
                    <Grid.Column width={16}>
                        <Header id="progear-header" as="h1">I am a dealer for selected pro gear that I actually use.</Header>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Header id="progear-subheader" as="h3">As a working musician, quality, reliabilty, and responsive customer support are absolute requirements. All the lines I handle have those virtues.</Header>
                    </Grid.Column>
                </Grid>
                <Grid id="progear-container">
                    <Grid.Row>
                        <Audix />
                    </Grid.Row>
                    <Grid.Row>

                    </Grid.Row>
                    <Grid.Row>
                        <BoomerangMusic />
                    </Grid.Row>
                    <Grid.Row>
                        
                    </Grid.Row>
                    <Grid.Row>
                        
                    </Grid.Row>
                    <Grid.Row>
                        
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default ProGear;