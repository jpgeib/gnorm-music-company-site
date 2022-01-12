import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import FastEddiesImage from "../../../assets/images/fast-eddies.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={FastEddiesImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Fast Eddie's Billiards - New Milford, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />The Federation</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Saturday 1/15 - 9 PM</Header>
            </Grid.Column>
        </>
    );
}