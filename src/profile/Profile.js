import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
          <div>
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
    );
  }
}
export default Profile;
