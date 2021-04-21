import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Guitars from "../../assets/images/img_guitars.jpg";
import { progearText } from "../../text";

class ProGear extends Component {
    render() {
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
                                    <Header as="h2">Pro Gear</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header as="h3">{progearText.main}</Header>
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