import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import GuitarFooter from "../../assets/images/bottom3.jpg";

export default class Footer extends Component {
    state = {
        windowHeight: window.innerHeight
    }

    handleResize = (e) => {
        this.setState({ windowHeight: window.innerHeight });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {

        const { container, copyright, guitar } = this.props.footer;
        const { windowHeight } = this.state;
        
        return (
            <>
                <Image style={guitar} src={GuitarFooter}/>
                <Grid>
                    {windowHeight <= 800 && <Grid.Row style={container.computer}>
                        <Grid.Column width={16}>
                            <Header style={copyright} id="company-copyright" as="h3">© Gnorm Music LLC 2020</Header>
                            <Header style={copyright} id="designer-copyright" as="h3">© Geib Designs 2020</Header>
                        </Grid.Column>  
                    </Grid.Row>}
                    {(windowHeight >= 801 && windowHeight <= 1000) && <Grid.Row style={container.largescreen}>
                        <Grid.Column width={16}>
                            <Header style={copyright} id="company-copyright" as="h3">© Gnorm Music LLC 2020</Header>
                            <Header style={copyright} id="designer-copyright" as="h3">© Geib Designs 2020</Header>
                        </Grid.Column>  
                    </Grid.Row>}
                    {windowHeight >= 1001 && <Grid.Row style={container.widescreen}>
                        <Grid.Column width={16}>
                            <Header style={copyright} id="company-copyright" as="h3">© Gnorm Music LLC 2020</Header>
                            <Header style={copyright} id="designer-copyright" as="h3">© Geib Designs 2020</Header>
                        </Grid.Column>  
                    </Grid.Row>}
                </Grid>
            </>
        );
    }
}