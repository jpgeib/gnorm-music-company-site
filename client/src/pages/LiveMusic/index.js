import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import { livemusicText } from "../../text";
import OutsideChanceImage from "../../assets/images/336_OutsideChance1.JPG";

class LiveMusic extends Component {

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

        const { band } = this.props;
        const { windowHeight } = this.state;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image size="medium" src={OutsideChanceImage} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={band.text} as="h2">Live Music</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={band.text} as="h3">{livemusicText.main}</Header>
                                    <div>Current window height: {windowHeight}</div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default LiveMusic;