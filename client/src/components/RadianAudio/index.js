import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ProGearNavbar from "../../containers/ProGearNavbar";
import RadianImage from "../../assets/images/img_radian.jpg";
import { progearText } from "../../text";

export default class RadianAudio extends Component {
    render() {
        return (
            <>
                <Grid style={this.props.entry.container}>
                    <ProGearNavbar subNav={this.props.subNav} />
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={RadianImage} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h2">Radian Audio</Header>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Header as="h2"><a style={this.props.entry.link} href="https://radianaudio.com/" target=":blank">https://radianaudio.com/</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h3">{progearText.radian}</Header>
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