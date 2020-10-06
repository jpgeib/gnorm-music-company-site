import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";

import "./style.css";

class Shows extends Component {
    render() {
        return(
            <>
                <Grid>
                    <Grid.Column>
                        <Header as="h1">Shows</Header>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

export default Shows;