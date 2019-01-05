import React, { Component } from 'react';

import Header from '../header/Header'
import Home from "../home/Home";
import Profile from "../profile/Profile";
import CurrentGraph from "../graphs/CurrentGraph";
import Create from "../ticket/Create";
import Read from "../ticket/Read"
import GraphPrediction from "../graphs/GraphPrediction";
import Ticket from "../ticket/Ticket"
import {Redirect, Route, Switch} from "react-router-dom";

class Dashboard extends Component {
  render() {
    document.body.classList.add('skin-blue');
    document.body.classList.add('sidebar-mini');
    return (
        <div>
            <Header/>
            <Switch>
                <Redirect exact  path="/" to={{pathname: "/home",}}/>
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/currentgraph" component={CurrentGraph}/>
                <Route exact path="/read" component={Read}/>
                <Route exact path="/create" component={Create}/>
                <Route exact path="/graphprediction" component={GraphPrediction}/>
                <Route exact path="/tickets" component={Ticket}/>
                {/*<Route component={NoMatch}/>*/}
            </Switch>
        </div>
    );
  }
}

export default Dashboard;
