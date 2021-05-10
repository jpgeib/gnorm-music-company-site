import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import MariaVs from "./MariaVs";
import Bistro from "./Bistro";
import ShackParty from "./ShackParty";

class ShowsInfo extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <MariaVs />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <Bistro />
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <ShackParty />
                </Grid.Row>
            </>
        );
    }
};

export default ShowsInfo;