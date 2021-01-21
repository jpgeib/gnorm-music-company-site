import React from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

export default () => {
    return (
        <>
            <Header id="tagline" as="h3">Gnorm (The 'G' is silent, I'm not...)</Header>
            <Header id="company" as="h3">Gnorm Music, LLC</Header>
            <Header id="po-box" as="h3">PO Box 5152</Header>
            <Header id="city" as="h3">Milford, CT 06460</Header>
            <Header id="phone" as="h3">Phone: +1 (203) 605-8665</Header>
            <Header id="email" as="h3">Email: <a id="email-link" href="mailto:gnorm@gnormmusic.com">gnorm@gnormmusic.com</a></Header>
        </>
    );
}