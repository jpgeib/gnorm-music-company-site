import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import SpottedHorseImage from "../../../assets/images/spotted-horse-tavern.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={SpottedHorseImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Spotted Horse - Shelton, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />The Federation</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Saturday 1/22 - 9:30 PM</Header>
            </Grid.Column>
        </>
    );
}