import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import SailsImage from "../../../assets/images/sails.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={SailsImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Sails - Darien, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Shell Shockt</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Friday 1/7 - 9:30 PM</Header>
            </Grid.Column>
        </>
    );
}