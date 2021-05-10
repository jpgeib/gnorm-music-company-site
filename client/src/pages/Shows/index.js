import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ShowDates from "../../components/ShowDates";

class Shows extends Component {
    render() {
        
        const { text, shows } = this.props;

        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header style={shows.text.header} as="h1">Show Dates</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header style={shows.text.subheader} as="h3">{text.subheader}</Header>
                    </Grid.Column>
                </Grid.Row>
                <ShowDates shows={shows} />
            </>
        );
    }
}

export default Shows;