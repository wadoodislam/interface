import React, { Component } from 'react';

class Ticket extends Component {
    render() {
        return (
            <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Tickets
                        <small>13 new replies</small>
                    </h1>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <a href="/create" className="btn btn-primary btn-block margin-bottom">Create</a>
                            <div className="box box-solid">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Folders</h3>

                                    <div className="box-tools">
                                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i
                                            className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="box-body no-padding">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li className="active"><a href="#"><i className="fa fa-inbox"></i> Inbox
                                            <span className="label label-primary pull-right">12</span></a></li>
                                        <li><a href="#"><i className="fa fa-envelope-o"></i> Sent</a></li>
                                        <li><a href="#"><i className="fa fa-file-text-o"></i> Drafts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Inbox</h3>

                                    <div className="box-tools pull-right">
                                        <div className="has-feedback">
                                            <input type="text" className="form-control input-sm"
                                                   placeholder="Search Mail"/>
                                            <span className="glyphicon glyphicon-search form-control-feedback"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body no-padding">
                                    <div className="mailbox-controls">
                                        <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i
                                            className="fa fa-square-o"></i>
                                        </button>
                                        <div className="btn-group">
                                             <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip"
                                            data-container="body" title="Delete">
                                        <i className="fa fa-trash-o"></i></button>
                                            <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Reply"><i
                                                className="fa fa-reply"></i>
                                            </button>
                                            <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Share">
                                                <i className="fa fa-share"></i>
                                            </button>
                                        </div>
                                        <button type="button" className="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Refresh"><i
                                            className="fa fa-refresh"></i>
                                        </button>
                                        <div className="pull-right">
                                            1-50/200
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default btn-sm"><i
                                                    className="fa fa-chevron-left"></i></button>
                                                <button type="button" className="btn btn-default btn-sm"><i
                                                    className="fa fa-chevron-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive mailbox-messages">
                                        All the tickets in inbox
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
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
export default Ticket;