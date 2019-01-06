import React, { Component } from 'react';

class TicketRow extends Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
               <tr>
                    <td>{this.prop.ticket.id}</td>
                    <td>{this.prop.ticket.title}</td>
                    <td>{this.prop.ticket.date_opened}</td>
                    <td><span className="label label-success">{this.prop.ticket.status}</span></td>
                    <td>{this.prop.ticket.messages[0]}</td>
               </tr>
        );
    }
}
export default TicketRow;
