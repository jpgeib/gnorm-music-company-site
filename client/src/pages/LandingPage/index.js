import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GuitarTop from "../../assets/images/SP_guita_1.jpg";
import GuitarBottom from "../../assets/images/SP_guitar_2.jpg";

class LandingPage extends Component {
    render() {
        return (
            <>
                <Grid id="landing-container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={GuitarTop} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as="h2">live MUSIC</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Image src={GuitarBottom} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default LandingPage;