import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/bower_components/Ionicons/css/ionicons.css'

import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/login" component={Login} />
                <Route exact path={"/(home|profile|)$"} component={Dashboard} />
            </div>
        </BrowserRouter>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
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
