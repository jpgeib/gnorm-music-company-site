import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import RadianImage from "../../assets/images/img_radian.jpg";

import "./style.css";

export default class RadianAudio extends Component {
    render() {
        return (
            <>
                <Grid id="radian-container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={RadianImage} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="radian-header" as="h2">Radian Audio</Header>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Header as="h2"><a id="radian-link" href="https://radianaudio.com/" target=":blank">https://radianaudio.com/</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="radian-text" as="h3">{this.props.radianText}</Header>
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