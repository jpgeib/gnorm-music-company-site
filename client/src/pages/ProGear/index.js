import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ProGearNavbar from "../../containers/ProGearNavbar";

import "./style.css";

class ProGear extends Component {
    render() {
        return(
            <>
                {/* <Grid id="progear-header-container">
                    <Grid.Column width={16}>
                        <Header id="progear-header" as="h1">{progearHeader}</Header>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Header id="progear-subheader" as="h3">{progearSubheader}</Header>
                    </Grid.Column>
                </Grid> */}
                
                <Grid id="progear-container">
                    <ProGearNavbar />
            
                </Grid>
            </>
        );
    }
}

export default ProGear;