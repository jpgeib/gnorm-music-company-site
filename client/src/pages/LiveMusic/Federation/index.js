import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import JoelBio from "../../../components/Bios/JoelBio";
import JimBio from "../../../components/Bios/JimBio";

class Federation extends Component {
    render() {
        
        const { bios, band } = this.props;

        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header style={band.text} as="h1">The Federation</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <JoelBio font={band} joel={bios.fed.joel} />
                </Grid.Row>
                <Grid.Row>
                    <JimBio font={band} jim={bios.fed.jim} />
                </Grid.Row>
            </>
        );
    }
};

export default Federation;