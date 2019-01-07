import React, { Component } from 'react';
import TicketRow from "./TicketRow";

class ReadTicket extends Component {
    state = {
        single: false,
        tickets: [],
        current: -1
    }
    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }
    componentDidMount(){
        this.setState({
            tickets: []
        })
        this.loadTickets()
    }

    loadTickets(){
        let thisComp = this
        const options = {
            method: "get",
            headers: {
                "Authorization": "Token " + sessionStorage.getItem('token')
            }
        }
        console.log(options)
        fetch("http://127.0.0.1:8000/api/tickets/", options)
            .then((response) => response.json()).then((tickets) => {
            console.log(tickets)
            thisComp.setState({
                tickets: tickets.results
             })
        })
    }
    clickHandler(ticketIndex){
        debugger
        this.setState({
            single: true,
            current: ticketIndex
        })
    }

    render() {
        let {tickets} = this.state
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
                                                return (<TicketRow click={this.clickHandler} index={index+1} ticket={ticket}/>);
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
}
export default ReadTicket;