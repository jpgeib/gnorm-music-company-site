import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import MariaVsImage from "../../../assets/images/MariaVs.jpeg";

export default () => {
    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={MariaVsImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header as="h1">Maria V's - Shelton, CT</Header>
                <Header as="h2">Outside Chance</Header>
                <Header as="h2">7:30 PM</Header>
            </Grid.Column>
        </>
    );
}