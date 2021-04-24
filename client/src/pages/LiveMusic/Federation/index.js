import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import JoelBio from "../../../components/JoelBio";
import JimBio from "../../../components/JimBio";

class Federation extends Component {
    render() {
        
        const { bios } = this.props;

        return (
            <>
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
            </>
        );
    }
};

export default Federation;