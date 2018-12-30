import React, { Component } from 'react';
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/bower_components/Ionicons/css/ionicons.css'

import Header from '../header/Header'
import MainSection from "../mainsection/MainSection";
import MainSection2 from "../mainsection/MainSection2";
import {Redirect, Route, Switch} from "react-router-dom";

class Dashboard extends Component {
  render() {
    document.body.classList.add('skin-blue');
    document.body.classList.add('sidebar-mini');
    return (
        <div>
            <Header/>
            <Switch>
                <Redirect exact  path="/" to={{pathname: "/blank1",}}/>
                <Route exact path="/blank1" component={MainSection} />
                <Route exact path="/blank2" component={MainSection2} />
                {/*<Route component={NoMatch}/>*/}
            </Switch>
        </div>
    );
  }
}

export default Dashboard;
