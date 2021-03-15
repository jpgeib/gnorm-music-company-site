import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import VolumeDial from "../../assets/gifs/dial_bullet.gif";

import "./style.css";

class BandNavbar extends Component {

    state = {
        activeItem: ""
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;

        return (
            <Menu text>
                <Menu.Item
                    as={Link}
                    to="/livemusic"
                    name="livemusic"
                    active = {activeItem === "livemusic"}
                    onClick={this.handleItemClick}
                >
                    <Image size="mini" src={VolumeDial} />
                    Back to Live Music
                </Menu.Item>
            </Menu>
        );
    }
}

export default BandNavbar;