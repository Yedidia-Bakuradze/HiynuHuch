import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ListOfPositions } from "../Data/ListOfPositions.js";

function ApplyForm() {
  const { Formid } = useParams();
  const job ={
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
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);
  const [requirements, setRequirements] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      skills,
      requirements,
    });
  };

  const handleCheckboxChange = (e, setter, stateArray) => {
    const value = e.target.value;
    if (e.target.checked) {
      setter([...stateArray, value]);
    } else {
      setter(stateArray.filter(item => item !== value));
    }
  };

  return (
    <div className="apply-form-container border rounded p-4">
      <h1 className="sl">Apply for {job.title}</h1>
      <h1>Description:</h1>
      <h6>{job.description}</h6>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label><h3>Skills:</h3></Form.Label>
          <Row className="skillrow">
            {job.skills.map((skill, index) => (
              <Col key={`skill-${index}`}>
                <li>
                  <h6>{skill}</h6>
                  <Form.Check 
                    type="checkbox" 
                    value={skill} 
                    onChange={(e) => handleCheckboxChange(e, setSkills, skills)}
                  />
                </li>
              </Col>
            ))}
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label><h3>Requirements:</h3></Form.Label>
          <Row className="skillrow">
            {job.requirements.map((requirement, index) => (
              <Col key={`requirement-${index}`}>
                <li>
                  <h6>{requirement}</h6>
                  <Form.Check 
                    type="checkbox" 
                    value={requirement} 
                    onChange={(e) => handleCheckboxChange(e, setRequirements, requirements)}
                  />
                </li>
              </Col>
            ))}
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label><h3>Your name:</h3></Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h3>Email address</h3></Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicResume">
          <Form.Label><h3>Please upload your CV:</h3></Form.Label>
          <Form.Control type="file" placeholder="Your File:" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ApplyForm;
