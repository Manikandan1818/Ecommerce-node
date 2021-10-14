import React from "react";
import { Form } from "react-bootstrap";

export const Input = (props) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </Form.Group>
    </Form>
  );
};
