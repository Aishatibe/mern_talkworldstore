import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Store } from './../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';

const SigninScreen = () => {
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/';
  //

  //
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  //
  //
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (error) {
      /*  alert('Invalid email and password'); */
      toast.error(getError(error));
    }
  };
  //
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  //
  return (
    <div>
      <Container className="small-container">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h2 className="my-3">Sign In</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="mb-3">
            <Button
              style={{ background: '#ffff00', color: '#000' }}
              type="submit"
            >
              Sign In
            </Button>
          </div>
          <div className="mb-3">
            Not Registered ?{' '}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default SigninScreen;
