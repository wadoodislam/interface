import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";
import Constants from "../../utils/Constants";

class InvoiceRow extends Component {
    render() {
        const {invoice} = this.props;
        const {index} = this.props;
        return (
            invoice !== undefined ?
            <tr>
                <td>{index}</td>
                <td><Link to={`/invoices/${index}`}>{Constants.monthNames[invoice.month]}</Link></td>
                <td>{invoice.amount}</td>
                <td>{invoice.issue_date}</td>
                <td>{invoice.paid?
                    <span className="label label-success">Paid</span>:
                    <span className="label label-warning">Pending</span>}</td>
            </tr>
            :null);
    }
}
export default InvoiceRow;
