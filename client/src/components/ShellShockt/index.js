import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";

import "./style.css";

class ShellShockt extends Component {
    render() {
        return (
            <>
                <Grid>
                    <LiveMusicNavbar />
                    <Header as="h1">ShellShockt</Header>
                </Grid>
            </>
        );
    }
};

export default ShellShockt;