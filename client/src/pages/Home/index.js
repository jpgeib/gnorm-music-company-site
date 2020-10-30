import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import GnormProfile from "../../assets/images/GnormProfile.jpg";

import "./style.css";

class Home extends Component {
    render() {
        return(
            <>
                <Grid id="home-header-container">
                    <Grid.Column>
                        <Header id="home-header" as="h1">Welcome to Gnorm Music - The G is Silent, I'm Not</Header>
                    </Grid.Column>
                </Grid>
                <Grid id="home-container">
                    <Grid.Row>
                        <Grid.Column>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Image src={GnormProfile} />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>

                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default Home;