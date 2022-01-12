import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import BlackDuckImage from "../../../assets/images/BlackDuck.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={BlackDuckImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Black Duck - Westport, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Crush</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Friday 1/21 - 9 PM</Header>
            </Grid.Column>
        </>
    );
}