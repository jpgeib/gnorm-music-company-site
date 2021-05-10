import React, { Component } from "react";
import MariaVs from "./MariaVs";
import Bistro from "./Bistro";
import { Grid } from "semantic-ui-react";

class ShowsInfo extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <MariaVs />
                </Grid.Row>
                <Grid.Row>
                    <Bistro />
                </Grid.Row>
                <Grid.Row>
                    
                </Grid.Row>
            </>
        );
    }
};

export default ShowsInfo;