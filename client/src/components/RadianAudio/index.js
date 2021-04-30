import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import RadianImage from "../../assets/images/img_radian.jpg";

export default class RadianAudio extends Component {
    render() {
        const {  radian } = this.props.text;
        const { text, link } = this.props.entry;
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image size="medium" src={RadianImage} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h2">Radian Audio</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header as="h2"><a style={link} href="https://radianaudio.com/" target=":blank">https://radianaudio.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h3">{radian}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}