import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

export default class Navbar extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state;

        return (
            <Menu id="navbar" secondary>
                <Menu.Item
                    as={Link}
                    to="/"
                    className="menu-item"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                >
                    About Me
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/livemusic"
                    className="menu-item"
                    name="livemusic"
                    active={activeItem === "livemusic"}
                    onClick={this.handleItemClick}
                >
                    Live Music
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/instruction"
                    className="menu-item"
                    name="instruction"
                    active={activeItem === "instruction"}
                    onClick={this.handleItemClick}
                >
                    Instruction
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/progear"
                    className="menu-item"
                    name="progear"
                    active={activeItem === "progear"}
                    onClick={this.handleItemClick}
                >
                    Pro Gear
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/shows"
                    className="menu-item"
                    name="shows"
                    active={activeItem === "shows"}
                    onClick={this.handleItemClick}
                >
                    Shows
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/contact"
                    className="menu-item"
                    name="contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                >
                    Contact
                </Menu.Item>
            </Menu>
        );
    }

}