import React from "react";
import { Form } from "react-bootstrap";
import "../Style/login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ListOfUsers } from "../Data/ListOfUsers";


export default function LoginScreen() {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  //Verifies if the user exists in the database
  const verifyUserLogin = (e)=>{
    //Disable the JS functionality

    e.preventDefault()
    alert(emailAddress)
    alert(password)
    //Fetch data from backend and see if user exists
    const user = ListOfUsers.find((user)=>user.email === emailAddress && user.password === password);
    if(user){
      alert("Found")
    }else{
      alert("Not Found")
    }
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
          onChange={(e)=>setEmailAddress(e.target.value)}
        />

        <Form.Label className="fieldsnames">Password:</Form.Label>
        <Form.Control
          className="fields"
          type="password"
          placeholder="********"
          size="lg"
          name="password"
          onChange={(e)=>{setPassword(e.target.value)}}
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
            onClick={(e) => {verifyUserLogin(e)}}
            className="app_container loginpagebuttons"
          >
            log in
          </button>
          <button
            type="button"
            className="app_container loginpagebuttons"
            onClick={(e)=>{
                navigate("/recruiter/signup")

            }}
          >
            Cancel
          </button>
        </p>
      </Form>
    </div>
  );
}
