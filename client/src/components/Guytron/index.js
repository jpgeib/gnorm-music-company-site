import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GuytronImage from "../../assets/images/img_guytron.jpg";

import "./style.css";

export default class Guytron extends Component {
    render() {
        return(
            <>
                <Grid.Column width={8}>
                    <Image size="medium" src={GuytronImage} />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid id="guytron-container">
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header id="guytron-header" as="h2">Guytron</Header>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as="h2"><a id="guytron-link" href="https://www.guytron.com/" target=":blank">https://www.guytron.com/</a></Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="guytron-text" as="h3">
                                    I have been using Guytron amps and cabs almost exclusively since November of 1998. 
                                    Every now and than I try something else, only to go back to the Guytron, wondering 
                                    why I bothered. One of my heads was run over by a truck during load-in. The box was 
                                    crushed and splintered, but I straightened up the tubes and did the gig. Guy Hedrick, 
                                    the genius behind the amp, is a smoking player, as well as a friend.
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
}