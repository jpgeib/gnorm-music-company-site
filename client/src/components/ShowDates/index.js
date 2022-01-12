import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import BlackDuck from "./BlackDuck";
import MariaVs from "./MariaVs";
import Sails from "./Sails";
import Notch8 from "./Notch8";
import FastEddies from "./FastEddies";
import SpottedHorse from "./SpottedHorse";
import MilfordPub from "./MilfordPub";

class ShowsInfo extends Component {
    render() {

        const { text } = this.props.shows;

        return (
            <>
                <Grid.Row>
                    <Sails font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <MariaVs font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <Notch8 font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <FastEddies font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <BlackDuck font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <SpottedHorse font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <MilfordPub font={text} />
                </Grid.Row>
            </>
        );
    }
};

export default ShowsInfo;