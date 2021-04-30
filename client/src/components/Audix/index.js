import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import AudixImage from "../../assets/images/img_audix.jpg";

export default class Audix extends Component {
    render() {

        const { audix } = this.props.text;
        const { text, link } = this.props.entry;
        
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image size="medium" src={AudixImage} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h2">Audix</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header as="h2"><a style={link} href="https://audixusa.com/" target=":blank">https://audixusa.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h3">{audix}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
};