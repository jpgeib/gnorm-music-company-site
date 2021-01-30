import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

export default class ProGearNavbar extends Component {
    state = {
        activeItem: "audix"
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render() {

        const { activeItem } = this.state;

        return (
            <Menu tabular>
                <Menu.Item
                    as={Link}
                    to="/progear/audix"
                    name="audix"
                    active={activeItem === "audix"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/progear/guytron"
                    name="guytron"
                    active={activeItem === "guytron"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item 
                    as={Link}
                    to="/progear/boomerang"
                    name="boomerang"
                    active={activeItem === "boomerang"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/progear/radian"
                    name="radian"
                    active={activeItem === "radian"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/progear/georgeLs" 
                    name="georgeLs"
                    active={activeItem === "georgeLs"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/progear/weber"
                    name="weber"
                    active={activeItem === "weber"}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
};