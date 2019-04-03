import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import PaymentForm from '../paymentform/PaymentForm'
import NotFound from "../../notfound/404";

class Payments extends Component {
    constructor(props) {
        super(props);
    }

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
                return (
                    <StripeProvider apiKey="pk_test_3UcAk15uLvXGC7aO8o4HRrvn">
                      <div className="checkout">
                        <Elements>
                            <PaymentForm invoiceId={invoiceId}/>
                        </Elements>
                      </div>
                    </StripeProvider>
                );
            }
        }
        return <NotFound internal={true} />
    }
}

export default Payments;