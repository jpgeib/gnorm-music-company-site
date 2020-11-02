import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import RadianImage from "../../assets/images/img_radian.jpg";

import "./style.css";

export default class RadianAudio extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Image size="medium" src={RadianImage} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid id="radian-container">
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header id="radian-header" as="h2">Guytron</Header>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as="h2"><a id="radian-link" href="https://radianaudio.com/" target=":blank">https://radianaudio.com/</a></Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="radian-text" as="h3">
                                    Radian makes great coaxial speakers. The most notable is the Microwedge line. 
                                    High power handling and 90º conical dispersion. I use RMW-1108's, RPX-108P-V's, 
                                    and RPX-112P-V's.
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
}