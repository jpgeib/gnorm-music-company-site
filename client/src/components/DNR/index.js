import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";

import "./style.css";

class DNR extends Component {
    render() {
        return (
            <>
                <Grid>
                    <LiveMusicNavbar />
                    <Header as="h1">DNR</Header>
                </Grid>
            </>
        );
    }
};

export default DNR;