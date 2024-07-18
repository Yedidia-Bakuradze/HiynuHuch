import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { jobFormsData } from "../Data/jobFormsData.js";

function ApplyForm() {
  const {id} = useParams();
  const job = {
    id: 1,
    title: "Full Stack Developer",
    description:
      "We are looking for a skilled Full Stack Developer to join our dynamic team.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficient in JavaScript, HTML, CSS",
      "Experience with React and Node.js",
      "Strong problem-solving skills",
    ],
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Git"],
    workType: "hybrid", // Possible values: 'remote', 'hybrid', 'onsite'
    level: "Mid-level", // Possible values: 'Entry-level', 'Mid-level', 'Senior-level'
    niceToHave: [
      "Experience with Docker",
      "Knowledge of CI/CD pipelines",
      "Familiarity with cloud platforms (AWS, Azure, GCP)",
    ],
  };
  const {formData, setFormData} = useState();
  const {Name, setName} = useState();
  const {Skills, setSkills} = useState([]);
  const {Requirements, setRequirements} = useState([]);
  const handleSubmit = (e) => {
    console.log.useState();
  }
  return (
    
      <div className="">
        <div className="apply-form-container border rounded p-4">
          <div id="applyform">
          <h1 className="sl" onChange={(e)=>{setFormData(e.target.value)}}>Apply for a {job.title}</h1>
          <h1>Description: </h1>
          <h6>{job.description}</h6>
         </div>
         <Form>
         <Form.Group className="mb-3" >
            <Form.Label><h3>Skills:</h3></Form.Label>
            <Row className="skillrow">
           {job.skills.map((skill) => (
              <Col>
            <li key={job.id}>
              <h6>{skill}</h6>
              <Form.Check type="checkbox" onClick={(e)=>{setSkills([...Skills,e.target.value])}}/>
            </li>
            </Col>
           ))}
           </Row>
          </Form.Group>   
          <Form.Group className="mb-3" >
            <Form.Label><h3>Requirements:</h3></Form.Label>
            <Row className="skillrow">
           {job.requirements.map((requirement) => (
              <Col>
            <li key={job.id}>
              <h6>{requirement}</h6>
              <Form.Check type="checkbox" onClick={(e)=>{setRequirements([...Requirements,e.target.value])}}/>
            </li>
            </Col>

           ))}
           </Row>
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
          </Form>
        </div>
      </div>
    
  );
}

export default ApplyForm;
