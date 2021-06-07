import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import KevinProfile from "../../../assets/images/DNR-Kevin.jpg";

export default (props) => {

    const { band, kevin } = props;
    return (
        <>
            <Grid.Column width={5}>
                <Image size="medium" src={KevinProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h2">Kevin - Drums</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h3">{kevin}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}