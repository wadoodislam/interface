import React, { Component } from 'react';
import Redirect from "react-router-dom/es/Redirect";
import Constants from '../utils/Constants'
import { postRequest } from '../utils/Network';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { redirectToReferrer: false };
    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleData = data => {
        let token = data['token'];
        if(token){
            localStorage.setItem('token', data['token']);
            if(this.state['remember_me']==='on'){
                localStorage.setItem('remember_me', this.state['remember_me'])
            }
            this.setState({ redirectToReferrer: true });
        }
    };

    login = e => {
        e.preventDefault();
        postRequest(Constants.loginUrl, this.state)
            .then(this.handleData);
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        if (localStorage.getItem('token')!==null) {
            return <Redirect to={{pathname: "/"}} />;
        }

        return (
            <div className="login-box">
                <div className="login-logo">
                    <b>Smart O Meter</b>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form id="login-form">
                        <div className="form-group  has-feedback">
                            <input type="text" name="username" onChange={this.handleInputChange} required="required"
                                   className="form-control" placeholder="Username"/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"/>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" name="password" onChange={this.handleInputChange} required="required"
                                   className="form-control" placeholder="Password"/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"/>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <label>
                                    <input type="checkbox" name="remember_me" onChange={this.handleInputChange}/>
                                    Remember Me
                                </label>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" onClick={this.login}
                                        className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                    {/*<a href="#">I forgot my password</a><br/>*/}
                </div>
            </div>
        );
    }
}

export default Login;
