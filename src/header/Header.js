import React, { Component } from 'react';
import logo from '../logo.svg'
import {withRouter} from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <div>
          <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src={logo} className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <SignOut />
                        </ul>
                    </div>
                </nav>
            </header>
            <div>
                {this.props.children}
          </div>
        </div>
    );
  }
}


const SignOut = withRouter(({ history }) =>
        <button
          onClick={() => {
              history.push("/");
              localStorage.removeItem('token');
              sessionStorage.removeItem('token');
          }}
        >
          Sign out
        </button>);


export default Header;
