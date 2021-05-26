import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import HomeList from "../../components/HomeList";
import GnormBio from "../../components/Bios/GnormBio";
import GnormProfile from "../../assets/images/GnormProfile.jpg";

class Home extends Component {
    render() {

        const { home, text } = this.props;

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
                        <GnormBio home={home} gnorm={text.gnorm} />
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default Home;