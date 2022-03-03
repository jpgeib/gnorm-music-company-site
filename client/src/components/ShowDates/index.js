import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import BlackDuck from "./BlackDuck";
import Sails from "./Sails";

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
                    <Sails font={text} />
                </Grid.Row>
            </>
        );
    }
};

export default ShowsInfo;