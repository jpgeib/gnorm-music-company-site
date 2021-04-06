import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import VolumeDial from "../../assets/images/volume-dial.png";

class LiveMusicNavbar extends Component {

    state = {
        activeItem: ""
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;

        return (
            <>
                {this.props.history.location.pathname === "/livemusic" && <Menu style={this.props.subNav} text>
                    <Menu.Item
                        as={Link}
                        to="/livemusic/outsidechance"
                        name="oc"
                        active={activeItem === "oc"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        Outside Chance
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/livemusic/dnr"
                        name="dnr"
                        active={activeItem === "dnr"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        DNR
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/livemusic/federation"
                        name="fed"
                        active={activeItem === "fed"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        The Federation
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/livemusic/shellshockt"
                        name="shell"
                        active={activeItem === "shell"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        ShellShockt
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/livemusic/cutouts"
                        name="cut"
                        active={activeItem === "cut"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                        The Cutouts
                    </Menu.Item>
                </Menu>}
                {this.props.history.location.pathname !== "/livemusic" && <Menu style={this.props.subNav} text>
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
                </Menu>}
            </>
        );
    }
}

export default withRouter(LiveMusicNavbar);