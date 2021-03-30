import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import JeffBio from "./JeffBio";
import PegBio from "./PegBio";
import MikeBio from "./MikeBio";
import JimBio from "../Federation/JimBio";
import BandNavbar from "../../containers/BandNavbar";

import "./style.css";

class OutsideChance extends Component {
    render() {
        return (
            <>
                <Grid id="oc-container">
                    <BandNavbar />
                    <Grid.Row>
                        <Header id="oc-header" as="h1">Outside Chance</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <JeffBio />
                    </Grid.Row>
                    <Grid.Row>
                        <PegBio />
                    </Grid.Row>
                    <Grid.Row>
                        <MikeBio />
                    </Grid.Row>
                    <Grid.Row>
                        <JimBio />
                    </Grid.Row>
                </Grid>
            </>
        );
    }
};

export default OutsideChance;