import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import { showsSubheader } from "../../text";
import LiveShow from "../../assets/images/img_band_red.jpg";

import "./style.css";

class Shows extends Component {
    render() {
        return (
            <>
                <Grid id="shows-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="shows-header" as="h1">Show Dates</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Image src={LiveShow} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid id="shows-subcontainer">
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="shows-subheader" as="h3">{showsSubheader}</Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="calendly-link" as="h3">[Link to Calendly]</Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default Shows;