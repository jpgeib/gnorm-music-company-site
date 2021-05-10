import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import PlaceholderImage from "../../assets/images/img_band_red.jpg"

class ShowsInfo extends Component {
    render() {
        return (
            <>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={PlaceholderImage} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header as="h1">Show 1</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
};

export default ShowsInfo;