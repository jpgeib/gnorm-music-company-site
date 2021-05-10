import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import BistroImage from "../../../assets/images/Bistro143.png";

export default () => {
    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={BistroImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header as="h1">Bistro 143 - Oxford, CT</Header>
                <Header as="h2">Starving Artists</Header>
                <Header as="h2">5/29 - 7 PM</Header>
            </Grid.Column>
        </>
    );
}