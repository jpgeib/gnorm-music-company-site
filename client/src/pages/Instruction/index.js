import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";

import "./style.css";

class Instruction extends Component {
    render() {
        return(
            <>
                <Grid>
                    <Grid.Column>
                        <Header as="h1">Instruction</Header>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

export default Instruction;