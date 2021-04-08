import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ProGearNavbar from "../../containers/ProGearNavbar";
import GuytronImage from "../../assets/images/img_guytron.jpg";
import { progearText } from "../../text";

export default class Guytron extends Component {
    render() {
        return (
            <>
                <Grid style={this.props.entry.container}>
                    <ProGearNavbar subNav={this.props.subNav} />
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={GuytronImage} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h2">Guytron</Header>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Header as="h2"><a style={this.props.entry.link} href="https://www.guytron.com/" target=":blank">https://www.guytron.com/</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h3">{progearText.guytron}</Header>
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