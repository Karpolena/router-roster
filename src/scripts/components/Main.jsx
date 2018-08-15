import React from "react";
import { Switch, Route } from "react-router-dom";

import {Player} from "./Player";
import {FullRoster} from "./Full-rosters";
import {Schedule} from "./Schedule";
import {Home} from "./Home";




const Roster = () => (
    <Switch>
        <Route exact path="/roster" component={FullRoster} />
        <Route path="/roster/:number" component={Player} />
    </Switch>         
)

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/roster" component={Roster} />
            <Route path="/schedule" component={Schedule} />
        </Switch>
    </main>
)