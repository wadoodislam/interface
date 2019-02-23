import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import PaymentForm from '../paymentform/PaymentForm'

class Payments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StripeProvider apiKey="pk_test_3UcAk15uLvXGC7aO8o4HRrvn">
          <div className="checkout">
            <Elements>
                <PaymentForm />
            </Elements>
          </div>
      </StripeProvider>
    );
  }
}

export default Payments;