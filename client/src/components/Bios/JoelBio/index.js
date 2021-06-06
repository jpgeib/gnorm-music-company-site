import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import JoelProfile from "../../../assets/images/Federation-Joel.png";

export default (props) => {

    const { font, joel } = props;

    return (
        <>
            <Grid.Column width={5}>
                <Image src={JoelProfile} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={font.text} as="h2">Joel - Bass, Vocals</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={font.text} as="h3">{joel}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}