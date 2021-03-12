import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GuitarTop from "../../assets/images/SP_guita_1.jpg";
import GuitarBottom from "../../assets/images/SP_guitar_2.jpg";

import "./style.css";

class LandingPage extends Component {
    render() {
        return (
            <>
                <Grid id="landing-container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image id="img-top" src={GuitarTop} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header id="landing-header" as="h2">live MUSIC</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Image id="img-bottom" src={GuitarBottom} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default LandingPage;