import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";

import "./style.css";

class Federation extends Component {
    render() {
        return (
            <>
                <Grid>
                    <LiveMusicNavbar />
                    <Header as="h1">Federation</Header>
                </Grid>
            </>
        );
    }
};

export default Federation;