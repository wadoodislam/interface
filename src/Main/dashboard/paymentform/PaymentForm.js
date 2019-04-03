import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {postRequest} from "../../utils/Network";
import Constants from "../../utils/Constants";

class PaymentForm extends Component {
    state = { complete: false };

    submit = async (event) => {
        event.preventDefault();
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let charge_data = { stripe_token: token.id, invoiceId: this.props.invoiceId};
        postRequest(Constants.chargeUrl, JSON.stringify(charge_data), true)
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