import React, { Component } from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from './header/Header'
import Home from "./home/Home";
import Profile from "./profile/Profile";
import TicketCreator from "./ticket/TicketCreator";
import TicketReader from "./ticket/TicketReader"
import InvoiceReader from "./invoice/InvoiceReader"
import Aside from "./aside/Aside";
import Chat from "./chat/Chat";
import AnnouncementReader from "./announcement/AnnouncementReader";
import Payments from "./payments/Payments";
import Constants from "../utils/Constants";
import { getRequest } from "../utils/Network";

class Dashboard extends Component {
    state ={
        user: null
    };

    handleData = (data) => {
        this.setState({ user: data });
    };

    componentDidMount(){
        getRequest(Constants.userUrl, true).then(this.handleData)
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
                        <Redirect exact path="/" to={{pathname: "/home"}}/>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/profile" render={(props) => <Profile {...props} user={user} />} />
                        <Route exact path="/tickets/create" component={TicketCreator}/>
                        <Route exact path="/tickets/:ticketId?" component={TicketReader}/>
                        <Route exact path="/announcements" component={AnnouncementReader}/>
                        <Route exact path="/announcements/:announcementId?" component={AnnouncementReader}/>
                        <Route exact path="/invoices/:invoiceId?"
                               render={(props) => <InvoiceReader {...props} user={user}/>}/>
                        <Route exact path="/payments/:invoiceId?"
                               render={(props) => <Payments {...props} user={user}/>}/>
                        <Route exact path="/chat" component={Chat}/>
                        <Redirect to={{pathname: "/404"}}/>
                    </Switch>
                </div>
            </div>
        );
    }
}


export default Dashboard;
