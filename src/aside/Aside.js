import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";

class Aside extends Component {
  render() {
    return (
        <aside className="main-sidebar">
                <section className="sidebar">
                  <div className="user-panel">
                    <div className="pull-left image">
                      <img src="../../public/img/Avatar.png" className="img-circle" alt="User Image"/>
                    </div>
                    <div className="pull-left info">
                      <p>Nina Mcintire</p>
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
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-bar-chart"/>
                        <span>Usage Graphs</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right"/>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><Link to="/currentgraph"><i className="fa fa-line-chart"/> Current Usage</Link></li>
                        <li><Link to="/graphprediction"><i className="fa fa-line-chart"/> Usage Prediction</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/history"><i className="fa fa-history"/><span>History</span></Link></li>
                    <li className=""><Link to="/history"><i className="fa fa-lock"/><span>Sign Out</span></Link></li>
                  </ul>
                </section>
              </aside>
    );
  }
}

export default Aside;
