import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import MilfordPubImage from "../../../assets/images/milford-pub.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={MilfordPubImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Milford Sports Pub - Milford, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Shell Shockt</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Friday 10/22 - 9PM-12AM </Header>
            </Grid.Column>
        </>
    );
}