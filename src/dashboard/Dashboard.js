import React, { Component } from 'react';

import Header from '../header/Header'
import Home from "../home/Home";
import Profile from "../profile/Profile";
import CurrentGraph from "../graphs/CurrentGraph";
import CreateTicket from "../ticket/CreateTicket";
import ReadTicket from "../ticket/ReadTicket"
import GraphPrediction from "../graphs/GraphPrediction";
import Ticket from "../ticket/Ticket"
import {Redirect, Route, Switch} from "react-router-dom";
import Aside from "../aside/Aside";

class Dashboard extends Component {
  render() {
    document.body.classList.add('skin-blue');
    document.body.classList.add('sidebar-mini');
    return (
        <div>
            <Header/>
            <Aside/>
            <div className="content-wrapper">
                <Switch>
                    <Redirect exact  path="/" to={{pathname: "/home"}}/>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/profile" component={Profile} />
                    {/*<Route exact path="/currentgraph" component={CurrentGraph}/>*/}
                    {/*<Route exact path="/read" component={Read}/>*/}
                    <Route exact path="/tickets/create" component={CreateTicket}/>
                    <Route exact path="/tickets" component={ReadTicket}/>
                    {/*<Route exact path="/graphprediction" component={GraphPrediction}/>*/}
                    {/*<Route exact path="/tickets" component={Ticket}/>*/}
                    <Redirect to={{pathname: "/404"}}/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default Dashboard;
