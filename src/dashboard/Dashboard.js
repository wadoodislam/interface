import React, { Component } from 'react';

import Header from '../header/Header'
import Home from "../home/Home";
import Profile from "../profile/Profile";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
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
                    <Redirect to={{pathname: "/404",}}/>
                </Switch>
            </div>
        );
    }
}




export default Dashboard;
