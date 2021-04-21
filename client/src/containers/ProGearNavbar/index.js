import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import VolumeDial from "../../assets/images/volume-dial.png";

class ProGearNavbar extends Component {

    state = {
        activeItem: ""
    }

    // componentDidMount() {
    //     if(this.props.history.location.pathname === "/progear/audix") {
    //         this.setState({ navbarStyle: "5%" });
    //     } else if (this.props.history.location.pathname === "/progear/guytron") {
    //         this.setState({ navbarStyle: "10%" });
    //     }
    // }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;
        const { path } = this.props;

        return (
            <>
                {(path === "/progear" || path === "/progear/audix" || path === "/progear/guytron"
                || path === "/progear/radian" || path === "/progear/boomerang" || path === "/progear/georgeLs"
                || path === "/progear/weber") && <Menu style={this.props.subNav} text>
                    <Menu.Item
                        as={Link}
                        to="/progear/audix"
                        name="audix"
                        active={activeItem === "audix"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                    Audix
                </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/progear/guytron"
                        name="guytron"
                        active={activeItem === "guytron"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                    Guytron
                </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/progear/boomerang"
                        name="boomerang"
                        active={activeItem === "boomerang"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                    Boomerang
                </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/progear/radian"
                        name="radian"
                        active={activeItem === "radian"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                    Radian
                </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/progear/georgeLs"
                        name="georgeLs"
                        active={activeItem === "georgeLs"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                    George L's
                </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/progear/weber"
                        name="weber"
                        active={activeItem === "weber"}
                        onClick={this.handleItemClick}
                    >
                        <Image size="mini" src={VolumeDial} />
                    Weber
                </Menu.Item>
                </Menu>}
            </>
        );
    }
};

export default withRouter(ProGearNavbar);