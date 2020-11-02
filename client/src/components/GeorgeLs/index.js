import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GeorgeLsImage from "../../assets/images/img_george.jpg";

import "./style.css";

export default class RadianAudio extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Image size="medium" src={GeorgeLsImage} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid id="george-container">
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header id="george-header" as="h2">George L's</Header>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as="h2"><a id="george-link" href="https://georgelsstore.com/" target=":blank">https://georgelsstore.com/</a></Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="george-text" as="h3">
                                George L's solderless cable is the pro standard for custom-wired pedal boards. 
                                They recently added solderless speaker cables to the line.
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
}