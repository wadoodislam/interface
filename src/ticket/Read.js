import React, { Component } from 'react';

class Read extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Read Tickets</h3>

                            <div className="box-tools pull-right">
                                <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Previous"><i
                                    className="fa fa-chevron-left"></i></a>
                                <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Next"><i
                                    className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="box-body no-padding">
                            <div className="mailbox-read-info">
                                <h3>Ticket Subject Is Placed Here</h3>
                                <h5>From: help@example.com
                                    <span className="mailbox-read-time pull-right">15 Feb. 2016 11:03 PM</span></h5>
                            </div>
                            <div className="mailbox-controls with-border text-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip"
                                            data-container="body" title="Delete">
                                        <i className="fa fa-trash-o"></i></button>
                                    <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip"
                                            data-container="body" title="Reply">
                                        <i className="fa fa-reply"></i></button>
                                    <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip"
                                            data-container="body" title="Forward">
                                        <i className="fa fa-share"></i></button>
                                </div>
                                <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip"
                                        title="Print">
                                    <i className="fa fa-print"></i></button>
                            </div>
                            <div className="mailbox-read-message">
                                <p>Hello John,</p>

                                <p>Content to read.</p>
                                <p>Thanks,<br/>Jane</p>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="pull-right">
                                <button type="button" className="btn btn-default"><i className="fa fa-reply"></i> Reply
                                </button>
                                <button type="button" className="btn btn-default"><i
                                    className="fa fa-share"></i> Forward
                                </button>
                            </div>
                            <button type="button" className="btn btn-default"><i className="fa fa-trash-o"></i> Delete
                            </button>
                            <button type="button" className="btn btn-default"><i className="fa fa-print"></i> Print
                            </button>
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
        );
    }
}
export default Read;