import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
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
            <Menu id="band-navbar" text>
                <Menu.Item
                    as={Link}
                    to="/livemusic"
                    name="livemusic"
                    active={activeItem === "livemusic"}
                    onClick={this.handleItemClick}
                >
                    <Image size="mini" src={VolumeDial} />
                    Back to Live Music
                </Menu.Item>
                {this.props.history.location.pathname === "/livemusic/outsidechance" &&
                    <Menu.Item
                        as={Link}
                        to="/livemusic/outsidechance"
                        name="oc"
                        active={activeItem === "oc"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Band Members
                    </Menu.Item>}
                {this.props.history.location.pathname === "/livemusic/outsidechance" && 
                    <Menu.Item
                        as={Link}
                        to="/livemusic/outsidechance/videos"
                        name="ocVideos"
                        active={activeItem === "ocVideos"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Videos
                    </Menu.Item>}
                {this.props.history.location.pathname === "/livemusic/outsidechance/videos" &&
                    <Menu.Item
                        as={Link}
                        to="/livemusic/outsidechance"
                        name="oc"
                        active={activeItem === "oc"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Band Members
                    </Menu.Item>}
                {this.props.history.location.pathname === "/livemusic/outsidechance/videos" && 
                    <Menu.Item
                        as={Link}
                        to="/livemusic/outsidechance/videos"
                        name="ocVideos"
                        active={activeItem === "ocVideos"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Videos
                    </Menu.Item>}
                {this.props.history.location.pathname === "/livemusic/federation" &&
                    <Menu.Item
                        as={Link}
                        to="/livemusic/federation"
                        name="fed"
                        active={activeItem === "fed"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Band Members
                    </Menu.Item>}
                {this.props.history.location.pathname === "/livemusic/federation" &&
                    <Menu.Item
                        as={Link}
                        to="/livemusic/federation/videos"
                        name="fedVideos"
                        active={activeItem === "fedVideos"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Videos
                    </Menu.Item>}
                {this.props.history.location.pathname === "/livemusic/federation/videos" &&
                    <Menu.Item
                        as={Link}
                        to="/livemusic/federation"
                        name="fed"
                        active={activeItem === "fed"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Band Members
                    </Menu.Item>}
                {this.props.history.location.pathname === "/livemusic/federation/videos" &&
                    <Menu.Item
                        as={Link}
                        to="/livemusic/federation/videos"
                        name="fedVideos"
                        active={activeItem === "fedVideos"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Videos
                    </Menu.Item>}
            </Menu>
        );
    }
}

export default withRouter(BandNavbar);