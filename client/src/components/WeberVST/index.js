import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import WeberImage from "../../assets/images/img_weber.jpg";
import { progearText } from "../../text";

export default class WeberVST extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image size="medium" src={WeberImage} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header as="h2">Weber VST</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header as="h2"><a style={this.props.entry.link} href="https://tedweber.com/" target=":blank">https://tedweber.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header as="h3">{progearText.weber}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}