import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
        <div>
          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                User Profile
              </h1>
            </section>

            <section className="content">
                  <div className="box box-primary">
                    <div className="box-body box-profile">
                      <img className="profile-user-img img-responsive img-circle" src="/img/user4-128x128.jpg"
                           alt="User profile picture"/>
                        <hr/>
                        <ul className="list-group list-group-unbordered">
                          <li className="list-group-item">
                            <b>Name</b> <a className="pull-right">Nina Mcintire</a>
                          </li>
                          <li className="list-group-item">
                            <b>Email</b> <a className="pull-right">example@gmail.com</a>
                          </li>
                          <li className="list-group-item">
                            <b>CNIC</b> <a className="pull-right">xxxxx-xxxxxxx-x</a>
                          </li>
                          <li className="list-group-item">
                            <b>Phone Number</b> <a className="pull-right">xxxx-xxxxxxx</a>
                          </li>
                           <li className="list-group-item">
                            <b>Adress</b> <a className="pull-right">Green view coloy raja wala, p-482, street no-5/c</a>
                          </li>
                           <li className="list-group-item">
                            <b>Subscription</b> <a className="pull-right">Pre-paid</a>
                          </li>
                           <li className="list-group-item">
                            <b>Meter Number</b> <a className="pull-right">xxxx-xxxxxxx</a>
                          </li>
                        </ul>
                        <a href="#" className="btn btn-primary btn-block">Edit</a>
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
      </div>
    );
  }
}
export default Profile;
