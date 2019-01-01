import React, { Component } from 'react';
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/bower_components/Ionicons/css/ionicons.css'

import Header from '../header/Header'
import Home from "../home/Home";
import Profile from "../profile/Profile";
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
                {/*<Route component={NoMatch}/>*/}
            </Switch>
        </div>
    );
  }
}

export default Dashboard;
