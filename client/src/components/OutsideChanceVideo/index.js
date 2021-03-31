import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import BandNavbar from "../../containers/BandNavbar";

import "./style.css";

class OutsideChanceVideo extends Component {
    render() {
        return (
            <>
                <Grid id="oc-video-container">
                    <BandNavbar />
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="oc-video-header" as="h1">Outside Chance Videos</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <iframe id="footloose" src="https://www.youtube.com/embed/p4Vpk2xuP74" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <iframe id="signed" src="https://www.youtube.com/embed/JKv7CCX9wJc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <iframe id="cant-get" src="https://www.youtube.com/embed/RgCdaZiXcUY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid.Column>
                        <Grid.Column width={8}>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default OutsideChanceVideo;