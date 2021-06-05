import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import MikeProfile from "../../../assets/images/OCB-Mike.png";

export default (props) => {
    
    const { font, mike } = props;
    return (
        <>
            <Grid.Column width={5}>
                <Image size="medium" src={MikeProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={font.text} as="h2">Mike "Juice" - Bass</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={font.text} as="h3">{mike}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}