import React from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import { redirect, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="center-div">
      <Form className="border-form ">
        <Form.Label className="fieldsnames">Email:</Form.Label>
        <Form.Control
          className="fields"
          type="email"
          placeholder="exmaple@gmail.com"
          size="lg"
          name="email"
        />

        <Form.Label className="fieldsnames">Password:</Form.Label>
        <Form.Control
          className="fields"
          type="password"
          placeholder="********"
          size="lg"
          name="password"
        />
        <p id="notloginbuttons">
          <button
            type="submit"
            onClick={() => {
              navigate("/forgotpassword");
            }}
            className="smallbuttons"
          >
            Forgot password?
          </button>
          <button
            type="submit"
            onClick={() => {
              navigate("/signup");
            }}
            className="smallbuttons"
          >
            sign up
          </button>
        </p>
        <p id="loginpagebuttons">
          <button
            type="submit"
            onClick={() => {
              navigate("/");
            }}
            className="app_container"
          >
            log in
          </button>
          <button
            type="button"
            className="app_container"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </p>
      </Form>
    </div>
  );
}
