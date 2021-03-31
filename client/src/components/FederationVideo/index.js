import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import BandNavbar from "../../containers/BandNavbar";

import "./style.css";

class FederationVideo extends Component {
    render() {
        return (
            <>
                <Grid id="fed-video-container">
                    <BandNavbar />
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="fed-video-header" as="h1">The Federation Videos</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <iframe id="miss-queen" src="https://www.youtube.com/embed/NAE10R4y1_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <iframe id="ziggy-star" src="https://www.youtube.com/embed/EJ7lu1SHmVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <iframe id="flirtin" src="https://www.youtube.com/embed/3g-eqjd8l10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <iframe id="cant-help" src="https://www.youtube.com/embed/Eo9zzy0rZEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default FederationVideo;