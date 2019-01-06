import React, { Component } from 'react';

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
                    <li><a href="/home"><i className="fa fa-home"></i> <span>Home</span></a></li>
                    <li><a href="/profile"><i className="fa fa-user"></i> <span>Profile</span></a></li>
                    <li><a href="/tickets/create"><i className="fa fa-line-pencil"></i> <span>Create Ticket</span></a></li>
                    <li><a href="/tickets"><i className="fa fa-line-sticky-note-o"></i><span>Read Tickets</span></a></li>
                   <li className="treeview">
                      <a href="#">
                        <i className="fa fa-folder-open-o"></i>
                        <span>Tickets</span>
                        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                      </a>
                      <ul className="treeview-menu">
                        <li><a href="/tickets"><i className="fa fa-line-list"></i>All Tickets</a></li>
                        <li><a href="ticket/create"><i className="fa fa-line-pencil"></i>Create Tickets</a></li>
                          <li><a href="/read"><i className="fa fa-line-sticky-note-o"></i>Read Tickets</a></li>
                      </ul>
                    </li>
                    <li><a href="/documentation"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
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
