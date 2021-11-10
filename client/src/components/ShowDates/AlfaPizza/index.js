import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import AlfaPizzaImage from "../../../assets/images/AlfaPizza.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={AlfaPizzaImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Alfa Pizza - Milford, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />The Void</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Saturday 11/6 - 8PM-11PM </Header>
            </Grid.Column>
        </>
    );
}