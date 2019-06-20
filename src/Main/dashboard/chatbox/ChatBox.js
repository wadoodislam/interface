import React, { Component } from 'react';
import WebSocketInstance from "../../utils/Websocket";

class ChatBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: this.props.ticket.messages,
            message:''
        };
        WebSocketInstance.connect(this.props.ticket.id);

        this.waitForSocketConnection(()=>{
            WebSocketInstance.addCallbacks(
                this.addMessage
            );
        })
    }

    waitForSocketConnection = callback => {
        setTimeout(
            ()=>{
                if(WebSocketInstance.state() ===1 ){
                    console.log('connection is secure');
                    callback();
                    return;
                }else {
                    console.log('waiting for connection...');
                    this.waitForSocketConnection(callback);
                }
            },100);

    };

    addMessage = message => {
        this.setState({
            messages: [...this.state.messages, message]
        });
    };

    messageChangeHandler = event =>{
        this.setState({
            message:event.target.value
        })
    };
    sendMessageHandler = event =>{
        event.preventDefault();
        const message = {
            'ticket_id': this.props.ticket.id,
            'detail': this.state.message,
            'sent_by': this.props.user.id
        };
        WebSocketInstance.newChatMessage(message);
        this.setState({
            message:''
        });
    };

    scrollToBottom = () => {
      this.messagesEnd.scrollIntoView();
    };

    componentDidMount() {
      this.scrollToBottom();
    }

    componentDidUpdate() {
      this.scrollToBottom();
    }
    render() {
        let {ticket, user} = this.props;
        return (
            <div className="box box-primary direct-chat direct-chat-primary sm-no-margin-bottom">
                <div className="box-header with-border">
                    <h3 className="box-title" id="direct_chat_header">Ticker # {ticket.id}</h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse">
                            <i className="fa fa-minus"></i></button>
                        <button onClick={this.props.closeChat} type="button" className="btn btn-box-tool" data-widget="remove">
                            <i className="fa fa-times"></i></button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="direct-chat-messages">
                        {this.state.messages.map((message)=>{
                            return user.id === message.sent_by.id ? (
                                <div className="direct-chat-msg right">
                                    <div className="direct-chat-info clearfix">
                                    <span className="direct-chat-name  pull-right ">
                                        {message.sent_by.first_name} {message.sent_by.last_name}
                                    </span>
                                        <span className="direct-chat-timestamp pull-left ">
                                        {message.sent}
                                    </span>
                                    </div>
                                    <div className="direct-chat-text pull-right">
                                        {message.detail}
                                    </div>
                                </div>
                            ):(
                                <div className="direct-chat-msg">
                                    <div className="direct-chat-info clearfix">
                                    <span className="direct-chat-name pull-left">
                                        {message.sent_by.first_name} {message.sent_by.last_name}
                                    </span>
                                        <span className="direct-chat-timestamp pull-right">
                                        {message.sent}
                                    </span>
                                    </div>
                                    <div className="direct-chat-text">
                                        {message.detail}
                                    </div>
                                </div>
                            );})}
                            <div style={{ float:"left", clear: "both" }}
                             ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                </div>
                <div className="box-footer">
                    <form onSubmit={this.sendMessageHandler}>
                    <div className="input-group">
                        <input type="text" onChange={this.messageChangeHandler} value={this.state.message}
                               placeholder="Type Message ..." name="message" className="form-control"/>
                        <span className="input-group-btn">
                            <button id="chat-message-submit"
                                    className="btn btn-primary btn-flat">Send</button>
                        </span>
                    </div>
                    </form>
                </div>
                <script>
                    {"$('#sm-chat .box').boxWidget({" +
                    "animationSpeed: 500," +
                    "collapseTrigger: '[data-widget=\"collapse\"]'," +
                    "removeTrigger: '[data-widget=\"remove\"]'," +
                    "collapseIcon: 'fa-minus'," +
                    "expandIcon: 'fa-plus'," +
                    "removeIcon: 'fa-times'" +
                    "})"}
                </script>
            </div>
        );
    }
}

export default ChatBox;