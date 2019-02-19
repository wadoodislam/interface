import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";
import {withRouter} from "react-router-dom";

class Aside extends Component {
  render() {
     let {user} = this.props;

    return (
        <aside className="main-sidebar">
            <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img src="/img/usernew.png" className="img-circle" alt="User Image"/>
              </div>
              <div className="pull-left info">
                <p>{!user?"":user.username}</p>
              </div>
            </div>
            <ul className="sidebar-menu" data-widget="tree">
              <li className="header">MAIN NAVIGATION</li>
              <li><Link to="/home"><i className="fa fa-home"/><span>Home</span></Link></li>
              <li><Link to="/profile"><i className="fa fa-user"/><span>Profile</span></Link></li>
              <li><Link to="/announcements"><i className="fa fa-bullhorn"/><span>Announcements</span></Link></li>
              <li className="treeview">
                <a href="#">
                  <i className="fa fa-folder-open-o"/>
                  <span>Tickets</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"/>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li><Link to="/tickets"><i className="fa fa-list"/>All Tickets</Link></li>
                  <li><Link to="/tickets/create"><i className="fa fa-pencil-square-o"/>Create New</Link></li>
                </ul>
              </li>
              <li><Link to="/documentation"><i className="fa fa-book"/><span>Documentation</span></Link></li>
              <li><Link to="/graphprediction"><i className="fa fa-line-chart"/> Usage Prediction</Link></li>
              <li><Link to="/history"><i className="fa fa-history"/><span>History</span></Link></li>
              <SignOut/>
            </ul>
          </section>
        </aside>
    );
  }
}


const SignOut = withRouter(({ history }) =>
        <button className="btn btn-flat btn-danger btn-block"
          onClick={() => {
              history.push("/");
              localStorage.removeItem('token');
          }}
        ><i className="fa fa-lock " style={{width:20}}/>
            <span>  Sign Out</span>
        </button>);


export default Aside;
