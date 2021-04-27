import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import LiveShow from "../../assets/images/img_band_red.jpg";

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
                    <Grid.Column width={7}>
                        <Image src={LiveShow} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={shows.text.subheader} as="h3">{text.subheader}</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={shows.text.link} as="h3">[Link to Calendly]</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default Shows;