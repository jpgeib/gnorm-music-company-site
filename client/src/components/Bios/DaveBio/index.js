import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import DaveProfile from "../../../assets/images/Cutouts-Dave.jpg";

export default (props) => {

    const { font, dave } = props;
    
    return (
        <>
            <Grid.Column width={5}>
                <Image size="medium" src={DaveProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={font.text} as="h2">Dave - Bass, Vocals</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={font.text} as="h3">{dave}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}