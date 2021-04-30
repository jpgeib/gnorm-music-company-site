import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GuytronImage from "../../assets/images/img_guytron.jpg";

export default class Guytron extends Component {
    render() {

        const { guytron } = this.props.text;
        const { text, link } = this.props.entry;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image size="medium" src={GuytronImage} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h2">Guytron</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header as="h2"><a style={link} href="https://www.guytron.com/" target=":blank">https://www.guytron.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h3">{guytron}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}