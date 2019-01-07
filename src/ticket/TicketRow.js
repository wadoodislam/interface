import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";

class TicketRow extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {ticket} = this.props
        const {index} = this.props
        return (
            ticket !== undefined ?
            <tr>
                <td>{index}</td>
                <td><Link to={`/tickets/${index}`}>{ticket.subject}</Link></td>
                <td>{ticket.date_opened}</td>
                <td><span className="label label-success">{ticket.status}</span></td>
                <td>{ticket.messages[0].detail}</td>
            </tr>
            :null);
    }
}
export default TicketRow;
