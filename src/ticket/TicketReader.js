import React, { Component } from 'react';
import TicketRow from "./TicketRow";
import NotFound from "../notfound/404";

class TicketReader extends Component {
    state = {
        tickets: [],
    };
    constructor(props){
        super(props)
    }
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
        console.log(options)
        fetch("http://127.0.0.1:8000/api/tickets/", options)
            .then((response) => response.json()).then((tickets) => {
            console.log(tickets)
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
            if (isNaN(ticketId)) {
                return <NotFound internal={true} />;
            }
            else if(this.state.tickets.length >= ticketId && ticketId > 0){
                return <TicketPage ticket={tickets[ticketId-1]}/>;
            }
        }
        return <TicketsTable tickets={tickets} />
    }
}

function TicketPage(props){
    return "";
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