import React from "react";
import { Header } from "semantic-ui-react";

export default (props) => {

    const { contactInfo } = props;
    
    return (
        <>
            <Header style={contactInfo.text} as="h3">Gnorm (The 'G' is silent, I'm not...)</Header>
            <Header style={contactInfo.header} as="h3">Gnorm Music, LLC</Header>
            <Header style={contactInfo.header} as="h3">PO Box 5152</Header>
            <Header style={contactInfo.text} as="h3">Milford, CT 06460</Header>
            <Header style={contactInfo.text} as="h3">Phone: +1 (203) 605-8665</Header>
            <Header style={contactInfo.text} as="h3">Email: <a style={contactInfo.emailLink} href="mailto:gnorm@gnormmusic.com">gnorm@gnormmusic.com</a></Header>
        </>
    );
}