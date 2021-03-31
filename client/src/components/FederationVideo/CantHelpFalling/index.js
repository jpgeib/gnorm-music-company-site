import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default () => {
    return (
        <>
            <Grid.Column width={8}>
                <iframe 
                    id="cant-help" 
                    src="https://www.youtube.com/embed/Eo9zzy0rZEg" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                />
            </Grid.Column>
            <Grid.Column width={8}>
                <Grid>
                    <Grid.Row>
                        <Header as="h3">Live at The Shack Party - May 28, 2017</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Header as="h3">Cover of "Can't Help Falling In Love" by Elvis Presley</Header>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}