import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import "./home.scss";
import { Layout } from "../../components/Layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            Sidebar
          </Col>
          <Col md={10}>Container</Col>
        </Row>
      </Container>
    </Layout>
  );
};
