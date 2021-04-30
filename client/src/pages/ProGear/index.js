import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Guitars from "../../assets/images/img_guitars.jpg";


class ProGear extends Component {
    render() {

        const { main } = this.props.text;
        const { text } = this.props.font;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image size="medium" src={Guitars} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h2">Pro Gear</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={text} as="h3">{main}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default ProGear;