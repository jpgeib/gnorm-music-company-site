import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GnormMusicBanner from "../../assets/images/gnorm-banner1.jpg";

export default class Navbar extends Component {

    state = {
        activeItem: ""
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;
        const { navbar, gnormBanner, navItem } = this.props.nav;

        return (
        <>
            <Image style={gnormBanner} src={GnormMusicBanner} />
            <Menu style={navbar} secondary>
                <Menu.Item
                    as={Link}
                    to="/home"
                    style={navItem}
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                >
                    About Me
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/livemusic"
                    style={navItem}
                    name="livemusic"
                    active={activeItem === "livemusic"}
                    onClick={this.handleItemClick}
                >
                    Live Music
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/progear"
                    style={navItem}
                    name="progear"
                    active={activeItem === "progear"}
                    onClick={this.handleItemClick}
                >
                    Pro Gear
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/shows"
                    style={navItem}
                    name="shows"
                    active={activeItem === "shows"}
                    onClick={this.handleItemClick}
                >
                    Shows
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/contact"
                    style={navItem}
                    name="contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                >
                    Contact
                </Menu.Item>
            </Menu>
        </>
        );
    }
}