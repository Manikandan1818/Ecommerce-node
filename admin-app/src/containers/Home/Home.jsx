import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import "./home.scss";
import { Layout } from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/orders"}>Orders</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={10} className="container">
            Container
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
