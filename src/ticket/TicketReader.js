import React, { Component } from 'react';
import TicketRow from "./TicketRow";
import NotFound from "../notfound/404";

class TicketReader extends Component {
    state = {
        tickets: [],
    };
    componentDidMount(){
        this.setState({
            tickets: []
        });
        this.loadTickets()
    }

    loadTickets(){
        let thisComp = this;
        const options = {
            method: "get",
            headers: {
                "Authorization": "Token " + sessionStorage.getItem('token')
            }
        };
        console.log(options);
        fetch("http://127.0.0.1:8000/api/tickets/", options)
            .then((response) => response.json()).then((tickets) => {
            console.log(tickets);
            thisComp.setState({
                tickets: tickets.results
             })
        })
    }
    render() {
        let {tickets} = this.state;
        let {ticketId} = this.props.match.params;

        if (ticketId) {
            ticketId = parseInt(ticketId);
            if (!isNaN(ticketId) && tickets.length >= ticketId && ticketId > 0) {
                return <TicketPage ticket={tickets[ticketId-1]}/>;
            }
            return <NotFound internal={true} />;
        }
        return <TicketsTable tickets={tickets} />
    }
}

function TicketPage(props){
     let {ticket} = props;
    return (
        <div>
            <section className="content-header">
                <h1>
                    Ticket Details
                </h1>
            </section>
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                              <h2 className="box-title">Subject: {ticket.subject}</h2>
                            </div>
                            <div className="box-body no-padding">
                                <div className="mailbox-read-info">
                                    <h5>
                                        <span>Status: {ticket.status}</span>
                                        <span className="mailbox-read-time pull-right">{ticket.date_opened}</span>
                                    </h5>
                                </div>
                                {
                                    ticket.messages.map((message, index)=>{
                                        return(
                                            <div key={index} className="mailbox-read-message">
                                                <h4>Message:</h4><p>{message.detail}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TicketsTable(props) {
    let {tickets} = props;
    return (
            <div>
                <section className="content">

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">Tickets</h3>

                                    {/*<div className="box-tools">*/}
                                        {/*<div className="input-group input-group-sm" style="width: 150px;">*/}
                                            {/*<input type="text" name="table_search" className="form-control pull-right"*/}
                                                   {/*placeholder="Search">*/}

                                                {/*<div className="input-group-btn">*/}
                                                    {/*<button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>*/}
                                                {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="box-body table-responsive no-padding">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th>ID</th>
                                                <th>Subject</th>
                                                <th>Date Opened</th>
                                                <th>Status</th>
                                                <th>Detail</th>
                                            </tr>
                                            {tickets.length > 0 ? tickets.map((ticket, index)=>{
                                                return (<TicketRow key={ticket.id} index={index+1} ticket={ticket}/>);
                                            }):null}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
}


export default TicketReader;