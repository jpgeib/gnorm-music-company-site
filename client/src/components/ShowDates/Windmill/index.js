import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import WindmillImage from "../../../assets/images/windmill.jpg"
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={WindmillImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Windmill Restaurant - Stratford, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Switchback</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />7/23 - 7-11 PM</Header>
            </Grid.Column>
        </>
    );
}