import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
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
    constructor(prop){
        super(prop);
        this.state = {
            token: localStorage.getItem('token')
        };
        sessionStorage.setItem('token', this.state.token);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/404" component={NotFound}/>
                        <PrivateRoute component={Dashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem('token')!=="null" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


export default App;
