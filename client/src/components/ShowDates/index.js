import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import MariaVs from "./MariaVs";
import Bistro from "./MarineHall";
import ShackParty from "./ShackParty";

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
                    <Bistro font={text} />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <ShackParty font={text} />
                </Grid.Row>
            </>
        );
    }
};

export default ShowsInfo;