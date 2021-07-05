import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import MariaVs from "./MariaVs";
import MarineHall from "./MarineHall";
import SunsetGrill from "./SunsetGrill";
import Windmill from "./Windmill";

class ShowsInfo extends Component {
    render() {

        const { text } = this.props.shows;

        return (
            <>
                <Grid.Row>
                    <MariaVs font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <MarineHall font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <SunsetGrill font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <Windmill font={text} />
                </Grid.Row>
            </>
        );
    }
};

export default ShowsInfo;