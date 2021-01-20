import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import AudixImage from "../../assets/images/img_audix.jpg";

import "./style.css";

export default class Audix extends Component {
    render() {
        return(
            <>
                <Grid.Column width={8}>
                    <Image size="medium" src={AudixImage} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid id="audix-container">
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="audix-header" as="h2">Audix</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header as="h2"><a id="audix-link" href="https://audixusa.com/" target=":blank">https://audixusa.com/</a></Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="audix-text" as="h3">{this.props.audixText}</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};