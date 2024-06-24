import { Form, Button, } from "react-bootstrap";
import {emps} from "../data/emps.js";
import {positions} from "../data/positions.js";


function ApplyForm() {
  return (
    <ul>
      {emps.map((user) => (
        <li key={user._id && user._id.$oid ? user._id.$oid : user.name}>
          {user.name}
        </li>
      ))}
            {positions.map((user) => (
        <li key={user._id && user._id.$oid ? user._id.$oid : user.name}>
          {user.title}
        </li>
      ))}
    </ul>

    
  );
}
export default ApplyForm;


      {/* <Form method="post">
        <Form.Group>
          <Form.Label><h1>Apply form for a [job title]</h1></Form.Label>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label><h3>Your name:</h3></Form.Label>
        <Form.Control type="Name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h3>Email address</h3></Form.Label>
        <Form.Control type="Email" placeholder="Email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicResume">
        <Form.Label><h3>Please upload your Cv:</h3></Form.Label>
        <Form.Control type="file" placeholder="Your File:" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}