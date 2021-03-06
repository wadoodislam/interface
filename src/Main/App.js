import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from "react-router-dom";

import 'admin-lte/bower_components/bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/bower_components/Ionicons/css/ionicons.css'
import 'admin-lte/bower_components/font-awesome/css/font-awesome.min.css'
import '../assets/custom.css'

import Reducer from '../reducers/index';
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./notfound/404";
import { createStore } from "redux";
import Provider from "react-redux/es/components/Provider";

const store =  createStore(Reducer);

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/404" component={NotFound}/>
                            <PrivateRoute component={Dashboard} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => localStorage.getItem('token')!==null ? (
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
};


export default App;
