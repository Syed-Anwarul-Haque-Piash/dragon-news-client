import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Container className="mx-auto w-25">
        <h3 className="mt-3">Register your account</h3>
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="photo"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
