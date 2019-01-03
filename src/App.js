import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from "react-router-dom";
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/bower_components/Ionicons/css/ionicons.css'

import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./notfound/404";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/(home|profile|tickets|read|create|currentgraph|graphprediction)" component={Dashboard} />
                    <Route exact component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
