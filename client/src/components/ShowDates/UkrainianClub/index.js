import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import UkrainianClubImage from "../../../assets/images/UkrainianClub.jpg";
import VolumeDial from "../../../assets/images/volume-dial.png";

export default (props) => {

    const { header } = props.font;

    return (
        <>
            <Grid.Column width={8}>
                <Image size="big" src={UkrainianClubImage} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header style={header} as="h1">Ukrainian Club - Southport, CT</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Crush</Header>
                <Header style={header} as="h3"><Image src={VolumeDial} />Saturday 11/20 - 6PM-10PM </Header>
            </Grid.Column>
        </>
    );
}