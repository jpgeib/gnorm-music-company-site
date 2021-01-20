import React, { Component } from "react";
import { List } from "semantic-ui-react";

import "./style.css";

export default class HomeList extends Component {
    render() {
        return (
            <List>
                <List.Item className="home-list-item">
                    <List.Content>Guitar</List.Content>
                </List.Item>
                <List.Item className="home-list-item">
                    <List.Content>Vocals</List.Content>
                </List.Item>
                <List.Item className="home-list-item">
                    <List.Content>Keyboard</List.Content>
                </List.Item>
            </List>
        );
    }
}