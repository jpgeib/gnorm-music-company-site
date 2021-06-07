import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import AndrewProfile from "../../../assets/images/DNR-Andy.jpg";

export default (props) => {

    const { band, andrew } = props;

    return (
        <>
            <Grid.Column width={5}>
                <Image size="medium" src={AndrewProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h2">Andrew - Lead Vocals</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h3">{andrew}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}