import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default (props) => {
    return (
        <>
            <Grid.Column width={8}>
                <iframe 
                    style={props.video} 
                    src="https://www.youtube.com/embed/JKv7CCX9wJc" 
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
                        <Header as="h3">Cover of "Signed, Sealed, Delivered" by Stevie Wonder</Header>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}