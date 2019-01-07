import React, { Component } from 'react';

class TicketRow extends Component {
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)

    }
    onClick(e){
        e.preventDefault()
        debugger
        this.props.click(this.props.index)
    }
    render() {
        const {ticket} = this.props
        const {index} = this.props
        const {click} = this.props
        return (
            ticket !== undefined ?
            <tr>
                <td>{index}</td>
                <td><a onClick={this.onClick}>{ticket.subject}</a></td>
                <td>{ticket.date_opened}</td>
                <td><span className="label label-success">{ticket.status}</span></td>
                <td>{ticket.messages[0].detail}</td>
            </tr>
            :null);
    }
}
export default TicketRow;
