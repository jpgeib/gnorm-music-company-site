import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header, subheader } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Header style={subheader} as="h4">[Images not provided for private events.]</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Shack Party - Private</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />The Federation</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />5/30 - 6 PM</Header>
            </Grid.Column>
        </>
    );
}