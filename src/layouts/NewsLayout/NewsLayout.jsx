import React from "react";
//import Header from "../pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
//import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import RightNav from "../../pages/Shared/RightNav/RightNav";
//import NavigationBar from "../../pages/Shared/NavigationBar/NavigationBar";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      {/* <NavigationBar></NavigationBar> */}
      <Container>
        <Row>
          
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            {/* <RightNav></RightNav> */}
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayout;
