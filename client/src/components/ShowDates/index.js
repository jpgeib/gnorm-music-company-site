import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import MilfordPub from "./MilfordPub";
import PumpkinFestival from "./PumpkinFestival";

class ShowsInfo extends Component {
    render() {

        const { text } = this.props.shows;

        return (
            <>
                <Grid.Row>
                    <MilfordPub font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <PumpkinFestival font={text} />
                </Grid.Row>
            </>
        );
    }
};

export default ShowsInfo;