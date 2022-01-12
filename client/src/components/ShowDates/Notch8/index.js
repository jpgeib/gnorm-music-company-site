import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Notch8Image from "../../../assets/images/notch8.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={Notch8Image} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Notch8 - Bethel, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />The Federation</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Friday 1/14 - 8 PM</Header>
            </Grid.Column>
        </>
    );
}