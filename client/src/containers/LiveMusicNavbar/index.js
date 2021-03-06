import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import VolumeDial from "../../assets/images/volume-dial.png";

class LiveMusicNavbar extends Component {

    state = {
        activeItem: "",
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;
        const { path, subNav } = this.props;
        const bandPaths = (path === "/livemusic/outsidechance" || path === "/livemusic/outsidechance/videos"
            || path === "/livemusic/federation" || path === "/livemusic/federation/videos"
            || path === "/livemusic/dnr" || path === "/livemusic/cutouts");
        const ocPaths = (path === "/livemusic/outsidechance" || path === "/livemusic/outsidechance/videos");
        const fedPaths = (path === "/livemusic/federation" || path === "/livemusic/federation/videos");

        return (
            <>
                {path === "/livemusic" && <Menu style={subNav.navbar} text>
                    <div style={subNav.navItem}>
                        <Menu.Item
                            as={Link}
                            to="/livemusic/outsidechance"
                            name="oc"
                            active={activeItem === "oc"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={subNav.image} size="mini" src={VolumeDial} />
                        Outside Chance
                    </Menu.Item>
                    </div>
                    <div style={subNav.navItem}>
                        <Menu.Item
                            as={Link}
                            to="/livemusic/dnr"
                            name="dnr"
                            active={activeItem === "dnr"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={subNav.image} size="mini" src={VolumeDial} />
                        DNR
                    </Menu.Item>
                    </div>
                    <div style={subNav.navItem}>
                        <Menu.Item
                            as={Link}
                            to="/livemusic/federation"
                            name="fed"
                            active={activeItem === "fed"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={subNav.image} size="mini" src={VolumeDial} />
                        The Federation
                    </Menu.Item>
                    </div>
                    <div style={subNav.navItem}>
                        <Menu.Item
                            as={Link}
                            to="/livemusic/cutouts"
                            name="cut"
                            active={activeItem === "cut"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={subNav.image} size="mini" src={VolumeDial} />
                        The Cutouts
                    </Menu.Item>
                    </div>
                </Menu>}
                {bandPaths && <Menu style={subNav.navbar} text>
                    <div style={subNav.navItem}>
                        <Menu.Item
                            as={Link}
                            to="/livemusic"
                            name="livemusic"
                            active={activeItem === "livemusic"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={subNav.image} size="mini" src={VolumeDial} />
                            Back to Live Music
                        </Menu.Item>
                    </div>
                    {ocPaths &&
                        <div style={subNav.navItem}>
                            <Menu.Item
                                as={Link}
                                to="/livemusic/outsidechance"
                                name="oc"
                                active={activeItem === "oc"}
                                onClick={this.handleItemClick}
                            >
                                <Image style={subNav.image} size="mini" src={VolumeDial} />
                                Band Members
                            </Menu.Item>
                        </div>}
                    {ocPaths &&
                        <div style={subNav.navItem}>
                            <Menu.Item
                                as={Link}
                                to="/livemusic/outsidechance/videos"
                                name="ocVideos"
                                active={activeItem === "ocVideos"}
                                onClick={this.handleItemClick}
                            >
                                <Image style={subNav.image} size="mini" src={VolumeDial} />
                                Videos
                            </Menu.Item>
                        </div>}
                    {fedPaths &&
                        <div style={subNav.navItem}>
                            <Menu.Item
                                as={Link}
                                to="/livemusic/federation"
                                name="fed"
                                active={activeItem === "fed"}
                                onClick={this.handleItemClick}
                            >
                                <Image style={subNav.image} size="mini" src={VolumeDial} />
                                Band Members
                            </Menu.Item>
                        </div>}
                    {fedPaths &&
                        <div style={subNav.navItem}>
                            <Menu.Item
                                    as={Link}
                                    to="/livemusic/federation/videos"
                                    name="fedVideos"
                                    active={activeItem === "fedVideos"}
                                    onClick={this.handleItemClick}
                                >
                                <Image style={subNav.image} size="mini" src={VolumeDial} />
                                Videos
                             </Menu.Item>
                        </div>}
                </Menu>}
            </>
        );
    }
}

export default withRouter(LiveMusicNavbar);