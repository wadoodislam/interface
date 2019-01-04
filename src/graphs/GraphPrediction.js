import React, { Component } from 'react';

class GraphPrediction extends Component {
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <section class="content-header">
                        <h1>
                            Predicted Pattern of Usage
                        </h1>
                    </section>
                    <div className="content">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <i className="fa fa-bar-chart-o"></i>

                                <h3 className="box-title">Bar Chart</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                        className="fa fa-minus"></i>
                                    </button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i
                                        className="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div id="bar-chart" style={{height: "300px"}}></div>
                            </div>
                        </div>
                    </div>
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
                  <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                      <input type="text" name="q" className="form-control" placeholder="Search..."/>
                    <span className="input-group-btn">
                      <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                      </button>
                    </span>
                    </div>
                  </form>
                  <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                       <li><a href="/home"><i className="fa fa-home"></i> <span>Home</span></a></li>
                    <li><a href="/profile"><i className="fa fa-user"></i> <span>Profile</span></a></li>
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
                        <li><a href="/create"><i className="fa fa-line-pencil"></i>Create Tickets</a></li>
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
                     <aside className="control-sidebar control-sidebar-dark">

                    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a>
                        </li>
                        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i
                            className="fa fa-gears"></i></a></li>
                    </ul>



                </aside>
                </div>
            </div>
        );
    }
}
export default GraphPrediction;
