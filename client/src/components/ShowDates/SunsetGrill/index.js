import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import SunsetImage from "../../../assets/images/sunset-grill.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={SunsetImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Sunset Grille - Norwalk, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />DaCruz</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />7/17 - 5-9 PM</Header>
            </Grid.Column>
        </>
    );
}