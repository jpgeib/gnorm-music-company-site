import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Route, withRouter } from "react-router-dom";
import LiveMusicNavbar from "../../containers/LiveMusicNavbar";
import LiveMusic from "../../pages/LiveMusic";
import OutsideChance from "../../pages/LiveMusic/OutsideChance";
import OutsideChanceVideo from "../../pages/LiveMusic/OutsideChanceVideo";
import Federation from "../../pages/LiveMusic/Federation";
import FederationVideo from "../../pages/LiveMusic/FederationVideo";
import DNR from "../../pages/LiveMusic/DNR";
import Cutouts from "../../pages/LiveMusic/Cutouts";

class LiveMusicRoutes extends Component {
    render() {

        const { text, path, subNav, band } = this.props;
        const livePaths = (path === "/livemusic" || path === "/livemusic/outsidechance" ||
            path === "/livemusic/outsidechance/videos" || path === "/livemusic/federation"
            || path === "/livemusic/federation/videos" || path === "/livemusic/dnr"
            || path === "/livemusic/shellshockt" || path === "/livemusic/cutouts");

        return (
            <>
                {livePaths && <Grid.Row centered>
                    <Grid.Column width={15}>
                        <LiveMusicNavbar path={path} subNav={subNav} />
                    </Grid.Column>
                </Grid.Row>}
                <Route exact path="/livemusic" render={() => <LiveMusic text={text} band={band} />} />
                <Route exact path="/livemusic/outsidechance" render={() => <OutsideChance band={band} bios={text.bios} />} />
                <Route exact path="/livemusic/outsidechance/videos" render={() => <OutsideChanceVideo band={band} />} />
                <Route exact path="/livemusic/federation" render={() => <Federation band={band} bios={text.bios} />} />
                <Route exact path="/livemusic/federation/videos" render={() => <FederationVideo band={band} />} />
                <Route exact path="/livemusic/dnr" render={() => <DNR band={band} bios={text.bios} />} />
                <Route exact path="/livemusic/cutouts" render={() => <Cutouts band={band} bios={text.bios} />} />
            </>
        )
    }
};

export default withRouter(LiveMusicRoutes);