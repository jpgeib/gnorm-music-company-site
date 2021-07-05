import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import MarineImage from "../../../assets/images/marine-hall.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={MarineImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Marine Hall - Seymour, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Starving Artists</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Sunday 7/11 - 2-6 PM</Header>
            </Grid.Column>
        </>
    );
}