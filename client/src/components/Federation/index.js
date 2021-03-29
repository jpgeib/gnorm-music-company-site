import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import PlaceholderImg from "../../assets/images/fl_remys.jpg";
import { placeholderText } from "../../text";
import BandNavbar from "../../containers/BandNavbar";

import "./style.css";

class Federation extends Component {
    render() {
        return (
            <>
                 <Grid id="fed-container">
                    <BandNavbar />
                    <Grid.Row>
                        <Header id="fed-header" as="h1">The Federation</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={PlaceholderImg} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h2">Joel</Header>
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
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={PlaceholderImg} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h2">Jim</Header>
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
            </>
        );
    }
};

export default Federation;