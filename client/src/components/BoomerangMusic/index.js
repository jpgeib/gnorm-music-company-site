import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import BoomerangImage from "../../assets/images/img_boomerang.jpg";

export default class BoomerangMusic extends Component {
    render() {

        const { boomerang } = this.props.text;
        const { text, link } = this.props.entry;
        
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image size="medium" src={BoomerangImage} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid >
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h2">Boomerang Music</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header as="h2"><a style={link} href="https://boomeranglooper.com/" target=":blank">https://boomeranglooper.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h3">{boomerang}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}