import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormComp from '../components/FormComp';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userAction';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split('=')[1] : '/';
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormComp>
      <h1 className='text-center'>Sign In </h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader></Loader>}
      <Form onSubmit={submitHandler}>
        <FormGroup controlId="email" className='mt-3'>
          <FormLabel>Email Address</FormLabel>
          <FormControl
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId="password" className='mt-3'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>

        <Button type="submit" variant="primary" className="mt-3">
          Sign in{' '}
        </Button>
      </Form>
      <Row className="py-3">
        <Col>Dont have an account?
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} className='mx-3 text-info '>
            Register
          </Link>
        </Col>
      </Row>
    </FormComp>
  );
};

export default LoginScreen;
