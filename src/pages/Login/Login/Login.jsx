import React, { useContext } from "react";
import { Button, Container,Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
//import { Form } from "react-router-dom";

const Login = () => {
  const {login}=useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || 'category/0'
  console.log('Login page location',location)
  const handleLogin=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)
    login(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <Container className="mx-auto w-25">
        <h3 className="mt-3">Login your account</h3>
      <Form onSubmit={handleLogin} className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-secondary">
         Dont have an account? <Link to="/register">Register</Link>
        </Form.Text>
      <Form.Text className="text-success">
         
        </Form.Text>
      <Form.Text className="text-danger">
         
        </Form.Text>
    </Form>
    </Container>
  );
};

export default Login;
