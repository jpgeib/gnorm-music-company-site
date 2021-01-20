import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import BoomerangImage from "../../assets/images/img_boomerang.jpg";

import "./style.css";

export default class BoomerangMusic extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Image size="medium" src={BoomerangImage} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid id="boomerang-container">
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="boomerang-header" as="h2">Boomerang Music</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header as="h2"><a id="boomerang-link" href="https://boomeranglooper.com/" target=":blank">https://boomeranglooper.com/</a></Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="boomerang-text" as="h3">{this.props.boomerangText}</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
}