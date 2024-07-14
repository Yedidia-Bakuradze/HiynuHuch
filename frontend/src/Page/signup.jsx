import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { users } from "../data/users";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Function to handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "password" && value === "") {
      setErrors({
        ...errors,
        confirmpassword: "cannot be an empty string",
      });
    } else if (
      (name === "confirmpassword" && value !== formData.password) ||
      (name === "password" && value !== formData.confirmpassword)
    ) {
      setErrors({
        ...errors,
        confirmpassword: "Passwords do not match",
      });
    } else {
      setErrors((prevErrors) => {
        const { confirmpassword, ...restErrors } = prevErrors;
        return restErrors;
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If no password has been inserted
    if (formData.password === "") {
      setErrors({
        ...errors,
        confirmpassword: "cannot be an empty string",
      });
    }
    // If passwords do not match
    else if (formData.password !== formData.confirmpassword) {
      setErrors({
        ...errors,
        confirmpassword: "Passwords do not match",
      });
    }
    // When the details are valid
    else {
      setErrors({});
      alert("Signup Successful");
      const newUser = {
        id: Math.floor(Math.random() * 10000),
        email: formData.email,
        password: formData.password,
        name: formData.name,
      };
      users.push(newUser);
      navigate("/");
    }
  };

  return (
    <div className="center-div">
      <Form onSubmit={handleSubmit} className="border-form ">
        <Form.Label className="fieldsnames">Name:</Form.Label>
        <Form.Control
          className="fields"
          type="name"
          placeholder="username"
          size="lg"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Form.Label className="fieldsnames">Email:</Form.Label>
        <Form.Control
          className="fields"
          type="email"
          placeholder="example@gmail.com"
          size="lg"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Form.Label className="fieldsnames">Password:</Form.Label>
        <Form.Control
          className="fields"
          type="password"
          placeholder="********"
          size="lg"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Form.Label className="fieldsnames">Confirm Password:</Form.Label>
        <Form.Control
          className="fields"
          type="password"
          placeholder="********"
          size="lg"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleChange}
        />
        {errors.confirmpassword && (
          <Alert variant="danger" className="mt-2">
            {errors.confirmpassword}
          </Alert>
        )}

        <p id="loginpagebuttons">
          <Button type="submit" className="app_container">
            Sign Up
          </Button>
          <Button
            type="button"
            className="app_container"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </Button>
        </p>
      </Form>
    </div>
  );
}
