import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';

const PaymentMethodScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const navigate = useNavigate();
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;
  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || 'Paypal'
  );
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h2 className="my-3">Payment Method</h2>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="payPal"
              label="payPal"
              value="payPal"
              checked={paymentMethodName === 'payPal'}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            ></Form.Check>
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="stripe"
              label="stripe"
              value="stripe"
              checked={paymentMethodName === 'stripe'}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            ></Form.Check>
          </div>
          <Button type="submit" className="mb-3">
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PaymentMethodScreen;
