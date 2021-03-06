import React from "react";
import { Grid, Header } from "semantic-ui-react";

export default (props) => {

    const { font, video } = props;
    return (
        <>
            <Grid.Column width={8}>
                <iframe 
                    style={video}
                    src="https://www.youtube.com/embed/RgCdaZiXcUY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />
            </Grid.Column>
            <Grid.Column width={8}>
                <Grid>
                    <Grid.Row>
                        <Header style={font} as="h3">Live at Milford Oyster Festival - August 16, 2014</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Header style={font} as="h3">Cover of "Can't Get Enough" by Bad Company</Header>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </>
    );
}