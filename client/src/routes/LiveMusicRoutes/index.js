import React, { Component } from "react";
import { Route } from "react-router-dom";
import LiveMusic from "../../pages/LiveMusic";
import OutsideChance from "../../components/OutsideChance";
import OutsideChanceVideo from "../../components/OutsideChanceVideo";
import Federation from "../../components/Federation";
import FederationVideo from "../../components/FederationVideo";
import DNR from "../../components/DNR";
import ShellShockt from "../../components/ShellShockt";
import Cutouts from "../../components/Cutouts";

export default class LiveMusicRoutes extends Component {
    render() {
        return (
            <>
                <Route exact path="/livemusic" render={() => <LiveMusic subNav={this.props.subNav} />} />
                <Route exact path="/livemusic/outsidechance" render={() => <OutsideChance band={this.props.band} subNav={this.props.subNav} />} />
                <Route exact path="/livemusic/outsidechance/videos" render={() => <OutsideChanceVideo band={this.props.band} subNav={this.props.subNav} />} />
                <Route exact path="/livemusic/federation" render={() => <Federation band={this.props.band} subNav={this.props.subNav} />} />
                <Route exact path="/livemusic/federation/videos" render={() => <FederationVideo band={this.props.band} subNav={this.props.subNav} />} />
                <Route exact path="/livemusic/dnr" render={() => <DNR band={this.props.band} subNav={this.props.subNav} />} />
                <Route exact path="/livemusic/shellshockt" render={() => <ShellShockt band={this.props.band} subNav={this.props.subNav} />} />
                <Route exact path="/livemusic/cutouts" render={() => <Cutouts band={this.props.band} subNav={this.props.subNav} />} />
            </>
        )
    }
};