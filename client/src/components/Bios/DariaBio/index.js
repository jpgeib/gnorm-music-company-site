import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import DariaProfile from "../../../assets/images/Cutouts-Daria.png";

export default (props) => {

    const { band, daria } = props;
    
    return (
        <>
            <Grid.Column width={5}>
                <Image src={DariaProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h2">Daria - Lead Vocals, Rhythm Guitar</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={band.text} as="h3">{daria}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}