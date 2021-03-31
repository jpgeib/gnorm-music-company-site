import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { bios } from "../../text";
import JoelBio from "./JoelBio";
import JimBio from "./JimBio";
import BandNavbar from "../../containers/BandNavbar";

import "./style.css";

class Federation extends Component {
    render() {
        return (
            <>
                 <Grid id="fed-container">
                    <BandNavbar />
                    <Grid.Row>
                        <Header id="fed-header" as="h1">The Federation</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <JoelBio joel={bios.fed.joel} />
                    </Grid.Row>
                    <Grid.Row>
                        <JimBio jim={bios.fed.jim} />
                    </Grid.Row>
                </Grid>
            </>
        );
    }
};

export default Federation;