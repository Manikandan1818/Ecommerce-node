import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Layout } from "../../components/Layout/Layout";
import { Input } from "../../components/UI/Input/Input";

export const Signup = (props) => {
  // If user logged in it doesn't go to the signup page
  const auth = useSelector((state) => state.auth);
  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                type="email"
                placeholder="Email"
                value=""
                onChange={() => {}}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Password"
                value=""
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
