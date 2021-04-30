import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default (props) => {

    const { font, video } = props;

    return (
        <>
            <Grid.Column width={8}>
                <iframe 
                    style={video} 
                    src="https://www.youtube.com/embed/NAE10R4y1_k" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                />
            </Grid.Column>
            <Grid.Column width={8}>
                <Grid>
                    <Grid.Row>
                        <Header style={font} as="h3">Live at The Shack Party - May 28, 2017</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Header style={font} as="h3">Cover of "Mississippi Queen" by Mountain</Header>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}