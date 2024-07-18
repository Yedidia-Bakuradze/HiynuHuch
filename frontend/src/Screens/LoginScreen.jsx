import React from "react";
import { Form,Button } from "react-bootstrap";
import "../Style/login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [admin,setAdmin] = useState({});
  //Verifies if the user exists in the database
  const verifyUserLogin = async (e)=>{
    //Disable the JS functionality

    e.preventDefault()
    alert(emailAddress)
    alert(password)
    //Fetch data from backend and see if user exists
    
    try{
      //Sends the email and password to the backend
      const {data} = await axios.post(
        "http://localhost:5000/api/admin/login",
        {email:emailAddress, password:password}
      ); 

      console.log(data);

      //Stores teh token in the local storage so the user wont need to login again
      localStorage.setItem("token", data.token);
      
      navigate(`/recruiter/${data._id}`)
      alert("Found")

    }catch(err){
      console.log(err);
      alert(err);
    }

  }


  return (
    <div className="center-div">
      <Form>
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
        <Button
            type="button"
            className="app_container loginpagebuttons"
            onClick={(e)=>{
                navigate("/recruiter/signup")

            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={(e) => {verifyUserLogin(e)}}
            className="app_container loginpagebuttons"
          >
            login
          </Button>

        </p>
      </Form>
    </div>
  );
}
