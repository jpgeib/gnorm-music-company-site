import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ProGearNavbar from "../../containers/ProGearNavbar";
import AudixImage from "../../assets/images/img_audix.jpg";
import { progearText } from "../../text";

import "./style.css";

export default class Audix extends Component {
    render() {
        return (
            <>
                <Grid style={this.props.entry.container}>
                    <ProGearNavbar subNav={this.props.subNav} />
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={AudixImage} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h2">Audix</Header>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Header as="h2"><a style={this.props.entry.link} href="https://audixusa.com/" target=":blank">https://audixusa.com/</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h3">{progearText.audix}</Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
};