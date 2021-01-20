import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import WeberImage from "../../assets/images/img_weber.jpg";

import "./style.css";

export default class WeberVST extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Image size="medium" src={WeberImage} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid id="weber-container">
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="weber-header" as="h2">Weber VST</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header as="h2"><a id="weber-link" href="https://tedweber.com/" target=":blank">https://tedweber.com/</a></Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="weber-text" as="h3">{this.props.weberText}</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
}