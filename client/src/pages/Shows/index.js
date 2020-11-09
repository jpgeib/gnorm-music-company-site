import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

class Shows extends Component {
    render() {
        return(
            <>
                <Grid id="shows-header-container">
                    <Grid.Column width={16}>
                        <Header id="shows-header" as="h1">Shows</Header>
                    </Grid.Column>
                </Grid>
                <Grid id="shows-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="shows-subheader" as="h3">To view available showdates, click on the Calendly link below:</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="calendly-link" as="h3">[Link to Calendly]</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default Shows;