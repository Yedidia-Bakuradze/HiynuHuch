import React from "react";
import { Form, Button } from "react-bootstrap";
import "../css/login.css";
import { redirect, useNavigate, Link } from "react-router-dom";

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
          <Link to={`/forgotpassword`} className="smallbuttons">
            Forgot password?
          </Link>

          <Link to={`/signup`} className="smallbuttons">
            signup
          </Link>
        </p>
        <p id="loginpagebuttons">
          <button
            type="submit"
            onClick={() => {
              navigate("/");
            }}
            className="app_container loginpagebuttons"
          >
            log in
          </button>
          <button
            type="button"
            className="app_container loginpagebuttons"
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
