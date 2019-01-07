import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";

class Aside extends Component {
  render() {
    return (
        <aside className="main-sidebar">
                <section className="sidebar">
                  <div className="user-panel">
                    <div className="pull-left image">
                      <img src="/img/user4-128x128.jpg" className="img-circle" alt="User Image"/>
                    </div>
                    <div className="pull-left info">
                      <p>Nina Mcintire</p>
                      <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                  </div>

                  <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li><Link to="/home"><i className="fa fa-home"/> <span>Home</span></Link></li>
                    <li><Link to="/profile"><i className="fa fa-user"/> <span>Profile</span></Link></li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-folder-open-o"/>
                        <span>Tickets</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right"/>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><Link to="/tickets"><i className="fa fa-line-list"/>All Tickets</Link></li>
                        <li><Link to="tickets/create"><i className="fa fa-line pencil"/>Create New</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/documentation"><i className="fa fa-book"/> <span>Documentation</span></Link></li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-bar-chart"></i>
                        <span>Usage Graphs</span>
                        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="/currentgraph"><i className="fa fa-line-chart"></i> Current Usage</a></li>
                        <li><a href="/graphprediction"><i className="fa fa-line-chart"></i> Usage Prediction</a></li>
                      </ul>
                    </li>
                    <li><a href="/history"><i className="fa fa-history"></i> <span>History</span></a></li>
                  </ul>
                </section>
              </aside>
    );
  }
}

export default Aside;
