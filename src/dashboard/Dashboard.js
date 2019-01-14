import React, { Component } from 'react';

import Header from '../header/Header'
import Home from "../home/Home";
import Profile from "../profile/Profile";
// import CurrentGraph from "../graphs/CurrentGraph";
import TicketCreator from "../ticket/TicketCreator";
import TicketReader from "../ticket/TicketReader"
// import GraphPrediction from "../graphs/GraphPrediction";
import {Redirect, Route, Switch} from "react-router-dom";
import Aside from "../aside/Aside";
import AnnouncementReader from "../announcement/AnnouncementReader";
import Payments from "../payments/Payments";

class Dashboard extends Component {
    state ={
        user: null
    };
    componentDidMount(){
        fetch("http://127.0.0.1:8000/api/user", {
            method: "get",
            headers: {
                "Authorization": "Token " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then((response) => response.json()).then((data) => {
            this.setState({
               user: data
            });
        })
    }
  render() {
    // document.body.classList.add('skin-blue');
    document.body.classList.add('sidebar-mini');
    let {user} = this.state;
    return (
        <div>
            <Header/>
            <Aside  user={user}/>
            <div className="content-wrapper">
                <Switch>
                    <Redirect exact  path="/" to={{pathname: "/home"}}/>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/profile" render={(props) => <Profile {...props} user={user} />} />
                    <Route exact path="/tickets/create" component={TicketCreator}/>
                    <Route exact path="/tickets/:ticketId?" component={TicketReader}/>
                    <Route exact path="/announcements" component={AnnouncementReader}/>
                    <Route exact path="/announcements/:announcementId?" component={AnnouncementReader}/>
                    <Route exact path="/payments" component={Payments}/>
                    <Redirect to={{pathname: "/404"}}/>
                </Switch>
            </div>
        </div>
    );
  }
}

export default Dashboard;
