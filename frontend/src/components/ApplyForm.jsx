import { Form, Button } from "react-bootstrap";

function ApplyForm() {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="apply-form-container border rounded p-4">
        <h1>Apply form for a [job title]</h1>
        <p>Description of the form goes here</p>
        <Form method="post">
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
        </Form>
      </div>
    </div>
  );
}

export default ApplyForm;
