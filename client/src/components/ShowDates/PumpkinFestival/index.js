import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import PumpkinFestivalImage from "../../../assets/images/Pumpkin-Festival.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={PumpkinFestivalImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Pumpkin Festival - Ivoryton Green, Essex, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />The Federation</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Saturday 10/23 - 5PM-8PM </Header>
            </Grid.Column>
        </>
    );
}