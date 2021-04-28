import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
import VolumeDial from "../../assets/images/volume-dial.png";

export default class HomeList extends Component {
    render() {

        const { list } = this.props;
        
        return (
            <List>
                <List.Item style={list.item}>
                    <Image src={VolumeDial} size="mini" />
                    <List.Content>Guitar</List.Content>
                </List.Item>
                <List.Item style={list.item}>
                    <Image src={VolumeDial} size="mini" />
                    <List.Content>Vocals</List.Content>
                </List.Item>
                <List.Item style={list.item}>
                    <Image src={VolumeDial} size="mini" />
                    <List.Content>Keyboard</List.Content>
                </List.Item>
            </List>
        );
    }
}