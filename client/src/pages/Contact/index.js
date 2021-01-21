import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ContactInfo from "../../components/ContactInfo";
import Telecast from "../../assets/images/img_gnfl.jpg";

import "./style.css";

class Contact extends Component {
    render() {
        return (
            <>
                <Grid id="contact-container">
                    <Grid.Row>
                        <Header id="contact-header" as="h1">Contact</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image id="contact-image" src={Telecast} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <ContactInfo />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </>
        );
    }
}

export default Contact;