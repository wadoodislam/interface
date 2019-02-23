import React, { Component } from 'react';
import {getRequest, postRequest} from "../../utils/Network";
import Constants from "../../utils/Constants";

class TicketCreator extends Component {
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    sendTicketData = (event) => {
        event.preventDefault();
        let ticket = {
            'subject': this.state.subject,
            'status': 'O',
            'messages':[
                {
                    "detail": this.state.message
                }
            ]
        };
        postRequest(Constants.ticketUrl, ticket, true)
            .then((data) => { console.log(data) })
    };

    render() {
        return (
            <div>
                <section className="content-header">
                    <h1>
                        Create New Ticket
                    </h1>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Ticket Form</h3>
                                </div>
                                <div className="box-body">
                                    <form>
                                        <div className="form-group">
                                            <input name="subject" onChange={this.handleInputChange}
                                                   className="form-control" placeholder="Subject"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea id="compose-textarea" name="message" onChange={this.handleInputChange}
                                                      className="form-control" placeholder="Detail">
                                            </textarea>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-2">
                                                <button type="submit"
                                                        onClick={this.sendTicketData}
                                                        className="btn btn-primary">Create
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TicketCreator;
