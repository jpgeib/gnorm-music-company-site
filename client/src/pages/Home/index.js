import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import HomeList from "../../components/HomeList";
import GnormProfile from "../../assets/images/GnormProfile.jpg";
import GuitarFooter from "../../assets/images/bottom3.jpg";
import { placeholderText } from "../../text";

import "./style.css";

class Home extends Component {
    render() {
        return(
            <>
                <Grid id="home-container">
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Grid id="home-subcontainer">
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Image id="home-profile" size="medium" src={GnormProfile} />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <HomeList />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h3">{placeholderText}</Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h3">{placeholderText}</Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h3">{placeholderText}</Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Image id="guitar-footer" src={GuitarFooter}/>
            </>
        );
    }
}

export default Home;

// {/* <Grid id="home-header-container">
//                     <Grid.Column>
//                         <Header id="home-header" as="h1">Welcome to Gnorm Music - The G is Silent, I'm Not</Header>
//                     </Grid.Column>
//                 </Grid> */}