import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import PlaceholderImg from "../../../assets/images/fl_remys.jpg";

export default (props) => {

    const { font, peg } = props;
    return (
        <>
            <Grid.Column width={5}>
                <Image size="medium" src={PlaceholderImg} />
            </Grid.Column>
            <Grid.Column width={11}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={font.text} as="h2">Peg</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={font.text} as="h3">{peg}</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}