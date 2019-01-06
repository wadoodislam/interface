import React, { Component } from 'react';

class CreateTicket extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendTicketData = this.sendTicketData.bind(this);
    }
    handleInputChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    sendTicketData(e) {
        e.preventDefault();
        let ticket = {
            'title': this.state.title,
            'status': 'O',
            'messages':[
                {
                    "detail": this.state.message
                }
            ]
        }
        const data = JSON.stringify(ticket);
        const options = {
            body: data,
            method: "post",
            headers: {
                "Authorization": "Token " + sessionStorage.getItem('token'), // + sessionStorage.getItem('token')
                "Content-Type": "application/json"
            }
        }
        console.log(data)
        console.log(options)
        fetch("http://127.0.0.1:8000/api/tickets/", options)
            .then((response) => response.json()).then((data) => {
            console.log(data)
            this.setState({title: "", message:""})
        })
    }
    render() {
        return (
                <div>
                    <section className="content-header">
                        <h1>
                            Create New Ticket
                            <small>preview sample</small>
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
                                                <input name="title" onChange={this.handleInputChange} className="form-control" placeholder="Title:"/>
                                            </div>
                                            <div className="form-group">
                                                <textarea id="compose-textarea" name="message" onChange={this.handleInputChange} className="form-control">
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
export default CreateTicket;
