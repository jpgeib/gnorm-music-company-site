import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default (props) => {
    return (
        <>
            <Grid.Column width={8}>
                <iframe 
                    style={props.video} 
                    src="https://www.youtube.com/embed/p4Vpk2xuP74" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                />
            </Grid.Column>
            <Grid.Column width={8}>
                <Grid>
                    <Grid.Row>
                        <Header as="h3">Live at Milford Oyster Festival - August 16, 2014</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Header as="h3">Cover of "Footloose" by Kenny Loggins</Header>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}