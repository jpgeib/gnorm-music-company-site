import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ContactInfo from "../../components/ContactInfo";
import Telecast from "../../assets/images/img_gnfl.jpg";

class Contact extends Component {
    render() {

        const { contact } = this.props;

        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header style={contact.text} as="h1">Contact</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={Telecast} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <ContactInfo contactInfo={contact} />
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default Contact;