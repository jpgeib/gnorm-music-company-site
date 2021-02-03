import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Guitars from "../../assets/images/img_guitars.jpg";
import ProGearNavbar from "../../containers/ProGearNavbar";
import { progearText } from "../../text";

import "./style.css";

class ProGear extends Component {
    render() {
        return (
            <>
                {/* <Grid id="progear-header-container">
                    
                    <Grid.Column width={16}>
                        <Header id="progear-subheader" as="h3">{progearSubheader}</Header>
                    </Grid.Column>
                </Grid> */}

                <Grid id="progear-container">
                    <ProGearNavbar />
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="medium" src={Guitars} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="progear-header" as="h2">Pro Gear</Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Header id="progear-text" as="h3">{progearText.main}</Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default ProGear;