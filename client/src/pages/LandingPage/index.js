import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GuitarTop from "../../assets/images/SP_guita_1.jpg";
import GuitarBottom from "../../assets/images/SP_guitar_2.jpg";

class LandingPage extends Component {
    render() {

        const { imgTop, imgBottom, header1, header2 } = this.props.land;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image style={imgTop} src={GuitarTop} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header style={header1} as="h2">live MUSIC</Header>
                        <Header style={header2} as="h2">and PRO GEAR</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image style={imgBottom} src={GuitarBottom} />
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default LandingPage;