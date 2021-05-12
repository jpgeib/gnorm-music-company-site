import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import BistroImage from "../../../assets/images/Bistro143.png";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={BistroImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Bistro 143 - Oxford, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Starving Artists</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />5/29 - 7 PM</Header>
            </Grid.Column>
        </>
    );
}