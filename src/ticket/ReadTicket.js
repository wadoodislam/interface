import React, { Component } from 'react';
import TicketRow from "./TicketRow";

class ReadTicket extends Component {
    state = {
        tickets: []
    }
    constructor(props){
        super(props)
        this.get_tickets()
    }
    get_tickets(){
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
            this.setState({tickets: tickets})
        })
    }
    render() {
        let tickets = this.state.tickets
        tickets = tickets.map(function(item, index){
            return(<TicketRow ticket={item} />);
        })
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">Responsive Hover Table</h3>

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
                                        <tr>
                                            <th>ID</th>
                                            <th>User</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Reason</th>
                                        </tr>
                                        {tickets}
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