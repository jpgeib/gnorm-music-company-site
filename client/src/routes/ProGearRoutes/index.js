import React, { Component } from "react";
import { Grid } from "semantic-ui-react"
import { Route } from "react-router-dom";
import ProGearNavbar from "../../containers/ProGearNavbar";
import ProGear from "../../pages/ProGear";
import Audix from "../../components/Audix";
import Guytron from "../../components/Guytron";
import BoomerangMusic from "../../components/BoomerangMusic";
import RadianAudio from "../../components/RadianAudio";
import GeorgeLs from "../../components/GeorgeLs";
import WeberVST from "../../components/WeberVST";

export default class ProGearRoutes extends Component {
    render() {
        return (
            <>
                <Grid.Row centered>
                    <Grid.Column width={15}>
                        <ProGearNavbar path={this.props.path} subNav={this.props.subNav} />
                    </Grid.Column>
                </Grid.Row>
                <Route exact path="/progear" render={() => <ProGear />} />
                <Route exact path="/progear/audix" render={() => <Audix entry={this.props.entry} />} />
                <Route exact path="/progear/guytron" render={() => <Guytron entry={this.props.entry} />} />
                <Route exact path="/progear/boomerang" render={() => <BoomerangMusic entry={this.props.entry} />} />
                <Route exact path="/progear/radian" render={() => <RadianAudio entry={this.props.entry} />} />
                <Route exact path="/progear/georgeLs" render={() => <GeorgeLs entry={this.props.entry} />} />
                <Route exact path="/progear/weber" render={() => <WeberVST entry={this.props.entry} />} />
            </>
        )
    }
};