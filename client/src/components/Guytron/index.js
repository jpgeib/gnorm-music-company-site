import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ProGearNavbar from "../../containers/ProGearNavbar";
import GuytronImage from "../../assets/images/img_guytron.jpg";

import "./style.css";

export default class Guytron extends Component {
    render() {
        return (
            <>
                <Grid id="guytron-container">
                    <ProGearNavbar />
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={GuytronImage} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="guytron-header" as="h2">Guytron</Header>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Header as="h2"><a id="guytron-link" href="https://www.guytron.com/" target=":blank">https://www.guytron.com/</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="guytron-text" as="h3">{this.props.guytronText}</Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}