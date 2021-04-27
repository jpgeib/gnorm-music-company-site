import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default (props) => {

    const { home, temp } = props;

    return (
        <>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header style={home.text} as="h3">{temp}</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header style={home.text} as="h3">{temp}</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header style={home.text} as="h3">{temp}</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );

}