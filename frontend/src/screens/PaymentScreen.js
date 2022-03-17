import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Col,
  FormCheck,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormComp from '../components/FormComp';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartAction';

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  if (!shippingAddress) {
    navigate('/shipping');
  }
  return (
    <FormComp>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <FormLabel as="legend">Select Method</FormLabel>
        <Col>
          <FormCheck className='py-3'
            type="radio"
            label="PayPal or Credit Card"
            id="PayPal"
            name="paymentMethod"
            value="PayPal"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></FormCheck>
        </Col>
        </FormGroup>
        <Button type="submit" variant="primary" className="mt-3">
          Continue
        </Button>
      </Form>
    </FormComp>
  );
};

export default PaymentScreen;
