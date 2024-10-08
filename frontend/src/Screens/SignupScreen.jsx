import React, { useState } from "react";
import { Form, Button, Alert, AlertHeading } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Style/login.css";
import { ListOfAdmins } from "../Data/ListOfAdmins";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    alert(name);
    alert(emailAddress);
    alert(password);
    alert(secondPassword);

    const user = ListOfAdmins.find((user)=>user.email === emailAddress);

    if(user){
      alert("User already exists");
      return;
    }

    if(password == secondPassword){
      alert("Passwords match");
      const newUser = {
        id: Math.floor(Math.random() * 10000),
        email: emailAddress,
        password: password,
        name: name,
      };
      setErrors({});
      ListOfAdmins.push(newUser);
      navigate(`/recruiter/${newUser.id}`); // Navigating to a specific user page
    }else{
      setErrors({...errors, confirmpassword: "Passwords do not match"});
    }
  }


  return (
    <div className="center-div">
      <Form onSubmit={handleSubmit} className="border-form ">
        
        {/* User's name */}
        <Form.Label className="fieldsnames">Name:</Form.Label>
        <Form.Control
          className="fields"
          type="name"
          placeholder="username"
          size="lg"
          name="name"
          onChange={(e)=>{setName(e.target.value)}}
        />


        {/* User's email address */}
        <Form.Label className="fieldsnames">Email:</Form.Label>
        <Form.Control
          className="fields"
          type="email"
          placeholder="example@gmail.com"
          size="lg"
          name="email"
          onChange={(e)=>{setEmailAddress(e.target.value)}}
        />

        {/* User's password*/}
        <Form.Label className="fieldsnames">Password:</Form.Label>
        <Form.Control
          className="fields"
          type="password"
          placeholder="********"
          size="lg"
          name="password"
          onChange={(e)=>{setPassword(e.target.value)}}
        />

        {/* User's second password for confirmation*/}
        <Form.Label className="fieldsnames">Confirm Password:</Form.Label>
        <Form.Control
          className="fields"
          type="password"
          placeholder="********"
          size="lg"
          name="confirmpassword"
          onChange={(e)=>{setSecondPassword(e.target.value)}}
        />


        {
          errors.confirmpassword && (
            <Alert variant="danger" className="mt-2">
              {errors.confirmpassword}
            </Alert>
          )
        }

        <p id="loginpagebuttons">
          <Button type="submit" className="app_container"> Sign Up </Button>
          
          <Button
            type="button"
            className="app_container"
            onClick={() => {
              navigate("/");
            }}> Cancel </Button>
        </p>
      </Form>
    </div>
  );
}
