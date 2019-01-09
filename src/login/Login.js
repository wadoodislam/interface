import React, { Component } from 'react';
import Redirect from "react-router-dom/es/Redirect";
class Login extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
        this.state = { redirectToReferrer: false };
    }
    handleInputChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login(e) {
        e.preventDefault();
        let formElement = document.getElementById("login-form");
        const data = new URLSearchParams();
        for (const pair of new FormData(formElement)) {
            data.append(pair[0], pair[1]);
        }
        fetch("http://127.0.0.1:8000/api/login", {
            body: data,
            method: "post"
        }).then((response) => response.json()).then((data) => {
            let token = data['token'];
            if(token){
                localStorage.setItem('token', data['token']);
                if(this.state['remember_me']==='on'){
                    localStorage.setItem('remember_me', this.state['remember_me'])
                }
                this.setState({ redirectToReferrer: true });
            }
        })
    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }
        if (localStorage.getItem('token')!==null) {
            return <Redirect to={{pathname: "/"}} />;
        }
        // document.body.classList.remove('sidebar-mini');
        // document.body.classList.remove('skin-blue');
        // document.body.classList.add('login-page');
        return (
            <div className="login-box">
                <div className="login-logo">
                    <b>Smart O Meter</b>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form id="login-form">
                        <div className="form-group  has-feedback">
                            <input type="text" name="username" onChange={this.handleInputChange} required="required" className="form-control" placeholder="Username"/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"/>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" name="password" onChange={this.handleInputChange} required="required" className="form-control" placeholder="Password"/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"/>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <label for="remember_me">
                                    <input type="checkbox" name="remember_me" onChange={this.handleInputChange}/> Remember Me
                                </label>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit"
                                        onClick={this.login}
                                        className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                    {/*<a href="#">I forgot my password</a><br/>*/}
                    {/*<a href="register.html" className="text-center">Register a new membership</a>*/}
                </div>
            </div>
        );
    }
}

export default Login;
