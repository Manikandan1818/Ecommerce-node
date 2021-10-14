import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Layout } from "../../components/Layout/Layout";
import { Input } from "../../components/UI/Input/Input";

export const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "60px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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
