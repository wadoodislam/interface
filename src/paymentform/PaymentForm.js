import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {complete: false};
  }

  async submit(ev) {
      ev.preventDefault();
      let {token} = await this.props.stripe.createToken({name: "Name"});
      console.log(token)
      let stripe_token = {
            'stripe_token': token.id
      };
      let response = await fetch("http://127.0.0.1:8000/api/charge", {
        method: "POST",
        headers: {
            "Authorization": "Token " + localStorage.getItem('token'),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(stripe_token)
      });

      if (response.ok)
          this.setState({complete: true});
  }

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