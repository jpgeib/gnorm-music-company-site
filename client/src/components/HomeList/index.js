import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import VolumeDial from "../../assets/gifs/dial_bullet.gif";

import "./style.css";

export default class HomeList extends Component {
    render() {
        return (
            <List>
                <List.Item className="home-list-item">
                    <Image src={VolumeDial} size="mini" />
                    <List.Content>Guitar</List.Content>
                </List.Item>
                <List.Item className="home-list-item">
                    <Image src={VolumeDial} size="mini" />
                    <List.Content>Vocals</List.Content>
                </List.Item>
                <List.Item className="home-list-item">
                    <Image src={VolumeDial} size="mini" />
                    <List.Content>Keyboard</List.Content>
                </List.Item>
            </List>
        );
    }
}