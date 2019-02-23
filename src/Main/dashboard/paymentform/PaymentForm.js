import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {postRequest} from "../../utils/Network";
import Constants from "../../utils/Constants";

class PaymentForm extends Component {
    state = { complete: false };

    submit = async (event) => {
        event.preventDefault();
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let stripe_token = { 'stripe_token': token.id };
        postRequest(Constants.chargeUrl, JSON.stringify(stripe_token), true)
            .then((data)=>{this.setState({complete: true});});
    };

    render() {
        if (this.state.complete)
            return <h1>Purchase Complete</h1>;
        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
        );
    }
}

export default injectStripe(PaymentForm);