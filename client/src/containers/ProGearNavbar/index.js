import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import VolumeDial from "../../assets/images/volume-dial.png";

class ProGearNavbar extends Component {

    state = {
        activeItem: ""
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;
        const { navbar, navItem, image } = this.props.subNav;

        return (
            <>
                <Menu style={navbar} text>
                    <div style={navItem}>
                        <Menu.Item
                            as={Link}
                            to="/progear/audix"
                            name="audix"
                            active={activeItem === "audix"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={image} size="mini" src={VolumeDial} />
                            Audix
                        </Menu.Item>
                    </div>
                    <div style={navItem}>
                        <Menu.Item
                            as={Link}
                            to="/progear/guytron"
                            name="guytron"
                            active={activeItem === "guytron"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={image} size="mini" src={VolumeDial} />
                            Guytron
                        </Menu.Item>
                    </div>
                    <div style={navItem}>
                        <Menu.Item
                            as={Link}
                            to="/progear/boomerang"
                            name="boomerang"
                            active={activeItem === "boomerang"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={image} size="mini" src={VolumeDial} />
                            Boomerang
                        </Menu.Item>
                    </div>
                    <div style={navItem}>
                        <Menu.Item
                            as={Link}
                            to="/progear/weber"
                            name="weber"
                            active={activeItem === "weber"}
                            onClick={this.handleItemClick}
                        >
                            <Image style={image} size="mini" src={VolumeDial} />
                            Weber
                        </Menu.Item>
                    </div>
                </Menu>
            </>
        );
    }
};

export default withRouter(ProGearNavbar);