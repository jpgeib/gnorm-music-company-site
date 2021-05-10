import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import MariaVsImage from "../../../assets/images/MariaVs.jpeg";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={MariaVsImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Maria V's - Shelton, CT</Header>
                <Header style={header} as="h3">Outside Chance</Header>
                <Header style={header} as="h3">5/14 - 7:30 PM</Header>
            </Grid.Column>
        </>
    );
}