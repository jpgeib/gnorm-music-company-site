import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Route, withRouter } from "react-router-dom";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";
import LiveMusic from "../../pages/LiveMusic";
import OutsideChance from "../../components/OutsideChance";
import OutsideChanceVideo from "../../components/OutsideChanceVideo";
import Federation from "../../components/Federation";
import FederationVideo from "../../components/FederationVideo";
import DNR from "../../components/DNR";
import ShellShockt from "../../components/ShellShockt";
import Cutouts from "../../components/Cutouts";

class LiveMusicRoutes extends Component {
    render() {
        return (
            <>
                <Grid.Row centered>
                    <Grid.Column width={15}>
                        <LiveMusicNavbar subNav={this.props.subNav} />
                    </Grid.Column>
                </Grid.Row>
                <Route exact path="/livemusic" render={() => <LiveMusic />} />
                <Route exact path="/livemusic/outsidechance" render={() => <OutsideChance />} />
                <Route exact path="/livemusic/outsidechance/videos" render={() => <OutsideChanceVideo band={this.props.band} />} />
                <Route exact path="/livemusic/federation" render={() => <Federation />} />
                <Route exact path="/livemusic/federation/videos" render={() => <FederationVideo band={this.props.band} />} />
                <Route exact path="/livemusic/dnr" render={() => <DNR />} />
                <Route exact path="/livemusic/shellshockt" render={() => <ShellShockt />} />
                <Route exact path="/livemusic/cutouts" render={() => <Cutouts />} />
            </>
        )
    }
};

export default withRouter(LiveMusicRoutes);