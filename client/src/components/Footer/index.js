import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GuitarFooter from "../../assets/images/bottom3.jpg";

export default class Footer extends Component {
    render() {

        const { container, copyright, guitar } = this.props.footer;
        
        return (
            <>
                <Image style={guitar} src={GuitarFooter}/>
                <Grid style={container}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={copyright} id="company-copyright" as="h3">© Gnorm Music LLC 2020</Header>
                            <Header style={copyright} id="designer-copyright" as="h3">© Geib Designs 2020</Header>
                        </Grid.Column>  
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}