import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import JimProfile from "../../../assets/images/OCB-Jim.png";

export default (props) => {

    const { band, jim } = props;

    return (
        <>
            <Grid.Column width={5}>
                <Image style={band.image} src={JimProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h2">Jim - Drums</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h3">{jim}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}