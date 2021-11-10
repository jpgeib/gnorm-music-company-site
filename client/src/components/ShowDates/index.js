import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import BlackDuck from "./BlackDuck";
import AlfaPizza from "./AlfaPizza";
import MariaVs from "./MariaVs";
import UkrainianClub from "./UkrainianClub";

class ShowsInfo extends Component {
    render() {

        const { text } = this.props.shows;

        return (
            <>
                <Grid.Row>
                    <BlackDuck font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <AlfaPizza font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <MariaVs font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <UkrainianClub font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <BlackDuck font={text} />
                </Grid.Row>
            </>
        );
    }
};

export default ShowsInfo;