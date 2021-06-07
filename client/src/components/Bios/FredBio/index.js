import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import FredProfile from "../../../assets/images/DNR-Fred.jpg";

export default (props) => {

    const { band, fred } = props;
    
    return (
        <>
            <Grid.Column width={5}>
                <Image size="medium" src={FredProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h2">Fred - Bass</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h3">{fred}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}