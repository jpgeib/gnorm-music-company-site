import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import JeffProfile from "../../../assets/images/OCB-Jeff.png";

export default (props) => {

    const { band, jeff } = props;
    return (
        <>
            <Grid.Column width={5}>
                <Image style={band.image} src={JeffProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h2">Jeff - Guitar, Keyboards, Vocals</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h3">{jeff}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}