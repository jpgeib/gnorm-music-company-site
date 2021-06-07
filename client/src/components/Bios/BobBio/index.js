import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import BobProfile from "../../../assets/images/DNR-Bob.jpg";

export default (props) => {

    const { band, bob } = props;
    
    return (
        <>
            <Grid.Column width={5}>
                <Image size="medium" src={BobProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h2">Bob - Guitar, Keyboards, Vocals</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h3">{bob}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}