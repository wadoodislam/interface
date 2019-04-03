import React, { Component } from 'react';
import InvoiceRow from "./InvoiceRow";
import NotFound from "../../notfound/404";
import Constants from "../../utils/Constants";
import Redirect from "react-router-dom/es/Redirect";


class InvoiceReader extends Component {
    render() {
        let {user} = this.props;
        if(user===null){
            return "";
        }
        let {invoices} = user.profile;
        let {invoiceId} = this.props.match.params;
        if (invoiceId) {
            invoiceId = parseInt(invoiceId);
            if (!isNaN(invoiceId) && invoices.length >= invoiceId && invoiceId > 0) {
                return <InvoicePage invoice={invoices[invoiceId-1]} index={invoiceId} user={user}/>;
            }
            return <NotFound internal={true} />;
        }
        return <InvoicesTable invoices={invoices} />
    }
}


class InvoicePage extends Component {
    state = {
        redirect:false
    };
    routeChange = (e) => {
        e.preventDefault();
        this.setState({
            redirect: true
        })
    };

    formatNumberLength(num, length) {
        let r = "" + num;
        while (r.length < length) {
            r = "0" + r;
        }
        return r;
    }

    render() {
        let {index} = this.props;
        if (this.state.redirect)
            return <Redirect to={{pathname: `/payments/${index}`}} />;
        let {invoice} = this.props;
        let {user} = this.props;
        return (
            <div>
                <section className="content-header">
                    <h1>
                        Invoice #{this.formatNumberLength(invoice.id, 6)}
                    </h1>
                </section>
                <section className="invoice">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2 className="page-header">
                                <i className="fa fa-globe"/> Smart O Meter
                                <small className="pull-right">{new Date().toDateString()}</small>
                            </h2>
                        </div>
                    </div>
                    <div className="row invoice-info">
                        <div className="col-sm-8 invoice-col">
                            To
                            <address>
                                <strong>{user.first_name} {user.last_name}</strong><br/>
                                {user.profile.street}<br/>
                                {user.profile.meter.area.area_name}, {user.profile.meter.area.city.city_name}<br/>
                                Phone: (+92) {user.profile.phone_num}<br/>
                                Email: {user.email}
                            </address>
                        </div>
                        <div className="col-sm-4 invoice-col">
                            <div className="pull-right">
                                <b>Invoice #{this.formatNumberLength(invoice.id, 6)}</b>
                                <br/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 table-responsive">
                            <table className="table table-striped">
                                <tbody>
                                <tr>
                                    <th>Month</th>
                                    <th>Issue Date</th>
                                    <th>Due Date</th>
                                    <th>Amount</th>
                                </tr>
                                <tr>
                                    <td>{Constants.monthNames[invoice.month]}</td>
                                    <td>{invoice.issue_date}</td>
                                    <td>{invoice.due_date}</td>
                                    <td>{invoice.amount}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6">
                            <p className="lead">Payment Methods:</p>
                            <img src="/img/stripe_logo.png" alt="Stripe"/>
                            <p className="text-muted well well-sm no-shadow" style={{marginTop: "10px;"}}>
                                Special Notes about payments
                            </p>
                        </div>
                        <div className="col-xs-6">
                            <p className="lead">Amount Due {invoice.due_date}</p>

                            <div className="table-responsive">
                                <table className="table">
                                    <tr>
                                        <th style={{width: "50%"}}>Subtotal:</th>
                                        <td>{invoice.amount} (PKR)</td>
                                    </tr>
                                    <tr>
                                        <th>Tax (0%)</th>
                                        <td>{0.0} (PKR)</td>
                                    </tr>
                                    <tr>
                                        <th>Total:</th>
                                        <td>{invoice.amount} (PKR)</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row no-print">
                        <div className="col-xs-12">
                            <a href="invoice-print.html" target="_blank" className="btn btn-default">
                                <i className="fa fa-print"/> Print</a>
                            <button type="button" onClick={this.routeChange} className="btn btn-success pull-right">
                                <i className="fa fa-credit-card"/> Submit Payment
                            </button>
                            <button type="button" className="btn btn-primary pull-right" style={{marginRight: "5px"}}>
                                <i className="fa fa-download"/> Generate PDF
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function InvoicesTable(props) {
    let {invoices} = props;
    return (
        <div>
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Invoices</h3>
                            </div>
                            <div className="box-body table-responsive no-padding">
                                <table className="table table-hover">
                                    <tbody>
                                        <tr>
                                            <th>ID</th>
                                            <th>Month</th>
                                            <th>Amount</th>
                                            <th>Issue Date</th>
                                            <th>Status</th>
                                        </tr>
                                        {invoices.length > 0 ? invoices.map((invoice, index)=>{
                                            return (<InvoiceRow key={invoice.id} index={index+1} invoice={invoice}/>);
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


export default InvoiceReader;