import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { bios } from "../../text";
import JoelBio from "./JoelBio";
import JimBio from "./JimBio";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";

class Federation extends Component {
    render() {
        return (
            <>
                 <Grid style={this.props.band.container}>
                    <LiveMusicNavbar subNav={this.props.subNav} />
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h1">The Federation</Header>
                        </Grid.Column>
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