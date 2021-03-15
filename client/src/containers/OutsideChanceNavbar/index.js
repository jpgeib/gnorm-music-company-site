import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import VolumeDial from "../../assets/gifs/dial_bullet.gif";

import "./style.css";

class OutsideChanceNavbar extends Component {

    state = {
        activeItem: ""
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;

        return (
            <Menu>
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
                <Menu.Item
                    as={Link}
                    to="/livemusic/outsidechance"
                    name="oc"
                    active = {activeItem === "oc"}
                    onClick={this.handleItemClick}
                >
                    <Image size="mini" src={VolumeDial} />
                    Band Members
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/livemusic/outsidechance/videos"
                    name="ocVideos"
                    active = {activeItem === "ocVideos"}
                    onClick={this.handleItemClick}
                >
                    <Image size="mini" src={VolumeDial} />
                    Videos
                </Menu.Item>
            </Menu>
        );
    }
}

export default OutsideChanceNavbar;