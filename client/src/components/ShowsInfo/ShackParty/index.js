import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default () => {
    return (
        <>
            <Grid.Column width={8}>
                <Header as="h4">[Images not provided for private events.]</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header as="h1">Shack Party - Private Event</Header>
                <Header as="h2">The Federation</Header>
                <Header as="h2">5/30 - 6 PM</Header>
            </Grid.Column>
        </>
    );
}