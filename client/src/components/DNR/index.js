import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import PlaceholderImg from "../../assets/images/fl_remys.jpg";
import { placeholderText } from "../../text";
import BandNavbar from "../../containers/BandNavbar";

import "./style.css";

class DNR extends Component {
    render() {
        return (
            <>
                <Grid id="dnr-container">
                    <BandNavbar />
                    <Grid.Row>
                        <Header id="dnr-header" as="h1">DNR</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={PlaceholderImg} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header as="h2">Lynn</Header>
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
                                        <Header as="h2">Fred</Header>
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
                                        <Header as="h2">Bob</Header>
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
                                        <Header as="h2">Andrew</Header>
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
                                        <Header as="h2">Kevin</Header>
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
                                        <Header as="h2">Rich</Header>
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

export default DNR;