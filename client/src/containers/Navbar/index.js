import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state;

        return (
            <Menu pointing secondary>
                <Menu.Item
                    as={Link}
                    to="/livemusic"
                    name="livemusic"
                    active={activeItem === "livemusic"}
                    content="Live Music"
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/instruction"
                    name="instruction"
                    active={activeItem === "instruction"}
                    content="Instruction"
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/progear"
                    name="progear"
                    active={activeItem === "progear"}
                    content="Pro Gear"
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/shows"
                    name="shows"
                    active={activeItem === "shows"}
                    content="Shows"
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/contact"
                    name="contact"
                    active={activeItem === "contact"}
                    content="Contact"
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }

}