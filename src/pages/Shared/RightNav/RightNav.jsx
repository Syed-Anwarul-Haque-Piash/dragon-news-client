import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button className="mt-2" variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt-4 mb-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
          
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
