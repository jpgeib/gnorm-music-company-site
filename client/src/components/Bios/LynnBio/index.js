import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import LynnProfile from "../../../assets/images/DNR-Lynn.jpg";

export default (props) => {

    const { band, lynn } = props;

    return (
        <>
            <Grid.Column width={5}>
                <Image size="medium" src={LynnProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h2">Lynn - Flute, Vocals</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h3">{lynn}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}