import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GeorgeLsImage from "../../assets/images/img_george.jpg";
import { progearText } from "../../text";

export default class GeorgeLs extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image size="medium" src={GeorgeLsImage} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="george-header" as="h2">George L's</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header as="h2"><a style={this.props.entry.link} href="https://georgelsstore.com/" target=":blank">https://georgelsstore.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="george-text" as="h3">{progearText.georgeLs}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}