import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ShowsInfo from "../../components/ShowsInfo";

class Shows extends Component {
    render() {
        const { text, shows } = this.props;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header style={shows.text.header} as="h1">Show Dates</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <ShowsInfo />
                </Grid.Row>
            </>
        );
    }
}

export default Shows;