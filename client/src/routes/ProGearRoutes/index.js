import React, { Component } from "react";
import { Grid } from "semantic-ui-react"
import { Route, withRouter } from "react-router-dom";
import ProGearNavbar from "../../containers/ProGearNavbar";
import ProGear from "../../pages/ProGear";
import Audix from "../../components/Audix";
import Guytron from "../../components/Guytron";
import BoomerangMusic from "../../components/BoomerangMusic";
import RadianAudio from "../../components/RadianAudio";
import GeorgeLs from "../../components/GeorgeLs";
import WeberVST from "../../components/WeberVST";

class ProGearRoutes extends Component {
    render() {
        
        const { text, path, entry, subNav } = this.props;

        return (
            <>
                {(path === "/progear" || path === "/progear/audix" || path === "/progear/guytron"
                || path === "/progear/radian" || path === "/progear/boomerang" || path === "/progear/georgeLs"
                || path === "/progear/weber") && <Grid.Row centered>
                    <Grid.Column width={15}>
                        <ProGearNavbar path={path} subNav={subNav} />
                    </Grid.Column>
                </Grid.Row>}
                <Route exact path="/progear" render={() => <ProGear text={text} font={entry} />} />
                <Route exact path="/progear/audix" render={() => <Audix text={text} entry={entry} />} />
                <Route exact path="/progear/guytron" render={() => <Guytron text={text} entry={entry} />} />
                <Route exact path="/progear/boomerang" render={() => <BoomerangMusic text={text} entry={entry} />} />
                <Route exact path="/progear/radian" render={() => <RadianAudio text={text} entry={entry} />} />
                <Route exact path="/progear/georgeLs" render={() => <GeorgeLs text={text} entry={entry} />} />
                <Route exact path="/progear/weber" render={() => <WeberVST text={text} entry={entry} />} />
            </>
        )
    }
};

export default withRouter(ProGearRoutes);