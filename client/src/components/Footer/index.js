import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

export default class Footer extends Component {
    render() {
        return (
            <>
                <Grid id="footer-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="company-copyright" as="h3">© Gnorm Music LLC 2020</Header>
                            <Header id="designer-copyright" as="h3">© Geib Designs 2020</Header>
                        </Grid.Column>  
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}