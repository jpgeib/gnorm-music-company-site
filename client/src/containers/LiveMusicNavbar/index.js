import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
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
                <Menu style={this.props.subNav} text>
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
                </Menu>
            </>
        );
    }
}

export default LiveMusicNavbar;