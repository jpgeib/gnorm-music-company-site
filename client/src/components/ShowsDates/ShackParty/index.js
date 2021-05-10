import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default (props) => {

    const { header, subheader } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Header style={subheader} as="h4">[Images not provided for private events.]</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Shack Party - Private</Header>
                <Header style={header} as="h3">The Federation</Header>
                <Header style={header} as="h3">5/30 - 6 PM</Header>
            </Grid.Column>
        </>
    );
}