import React, { Component } from 'react';

class Profile extends Component {
  render() {
      let {user} = this.props;
    return (!user?"":
          <div>
            <section className="content-header">
              <h1>
                User Profile
              </h1>
            </section>
            <section className="content">
                  <div className="box box-primary">
                    <div className="box-body box-profile">
                      <img className="profile-user-img img-responsive img-circle" src="/img/usernew.png"
                           alt="User profile picture"/>
                        <h3 className="profile-username text-center">{user.first_name} {user.last_name}</h3>
                        <ul className="list-group list-group-unbordered">
                          <li className="list-group-item">
                            <b>Email</b> <a className="pull-right">{user.email}</a>
                          </li>
                          <li className="list-group-item">
                            <b>CNIC</b> <a className="pull-right">{user.profile.cnic}</a>
                              <b>farwa</b>
                          </li>
                          <li className="list-group-item">
                            <b>Phone Number</b> <a className="pull-right">{user.profile.phone_num}</a>
                          </li>
                           <li className="list-group-item">
                            <b>Adress</b> <a className="pull-right">{user.profile.street} </a>
                          </li>
                           <li className="list-group-item">
                            <b>Subscription</b> <a className="pull-right">{user.profile.subscription.type==="PRE"?"Prepaid":"Postpaid"}</a>
                          </li>
                           <li className="list-group-item">
                            <b>Meter Number</b> <a className="pull-right">{user.profile.meter.meter_num}</a>
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
