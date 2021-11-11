import React from "react";
import { Form } from "react-bootstrap";

export const Input = (props) => {
  const { label, type, placeholder, value, onChange } = props;
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};
