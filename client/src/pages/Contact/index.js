import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

class Contact extends Component {
    render() {
        return(
            <>
                <Grid>
                    <Grid.Column>
                        <Header as="h1">Contact</Header>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

export default Contact;