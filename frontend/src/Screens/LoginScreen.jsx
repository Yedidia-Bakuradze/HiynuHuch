import React from "react";
import { Form, Button } from "react-bootstrap";
import "../Style/login.css";
import { useState } from "react";
import { redirect, useNavigate, Link } from "react-router-dom";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Verifies if the user exists in the database
  const verifyUserLogin = (e)=>{
    //Fetch data from backend and see if user exists
    alert(username)
    alert(password)

    //If hes not - Error message
    
    //If he is - navigate to /:id with the id provided by the backend


  }


  return (
    <div className="center-div">
      <Form className="border rounded ">
        <Form.Label className="fieldsnames">Email:</Form.Label>
        <Form.Control
          className="fields"
          type="email"
          placeholder="exmaple@gmail.com"
          size="lg"
          name="email"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <Form.Label className="fieldsnames">Password:</Form.Label>
        <Form.Control
          className="fields"
          type="password"
          placeholder="********"
          size="lg"
          name="password"
          onChange={(e)=>{setPassword(e.value.target)}}
        />

        <p id="notloginbuttons">
          <Link to={`/forgotpassword`} className="smallbuttons">
            Forgot password?
          </Link>

          <Link to={`/recruiter/signup`} className="smallbuttons">
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
            onClick={(e)=>verifyUserLogin(e)}
          >
            Cancel
          </button>
        </p>
      </Form>
    </div>
  );
}
