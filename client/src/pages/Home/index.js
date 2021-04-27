import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import HomeList from "../../components/HomeList";
import GnormProfile from "../../assets/images/GnormProfile.jpg";

class Home extends Component {
    render() {

        const { home, temp } = this.props;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image size="medium" src={GnormProfile} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <HomeList list={home} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={home.text} as="h3">{temp}</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={home.text} as="h3">{temp}</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={home.text} as="h3">{temp}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default Home;