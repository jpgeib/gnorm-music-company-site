import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GuitarFooter from "../../assets/images/bottom3.jpg";

import "./style.css";

export default class Footer extends Component {
    render() {
        return (
            <>
                <Image id="guitar-footer" src={GuitarFooter}/>
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