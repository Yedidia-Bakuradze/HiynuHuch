import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";

function ApplyForm() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState(null);
  const [file, setFile] = useState(null);

  // Fetching the job data from the backend
  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/app/${formId}`);
      setJob(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!skills.length || !requirements.length || !name || !email || !file) {
      alert("Please fill in all the fields");
      return;
    }

    const totalSkills = job.skills.length;
    const totalRequirements = job.tags.length;
    const selectedSkills = skills.length;
    const selectedRequirements = requirements.length;

    const skillScore = (selectedSkills / totalSkills) * 50;
    const requirementScore = (selectedRequirements / totalRequirements) * 50;
    const totalScore = skillScore + requirementScore;

    const formData = new FormData();
    formData.append("Status", "Pending");
    formData.append("AppId", formId);
    formData.append("EmpName", name);
    formData.append("email", email);
    formData.append("cv", file);
    formData.append("skills", skills);
    formData.append("requirements", requirements);
    formData.append("score", totalScore);


    try {

      // Create a new instance of FormData
      const formattedData = new FormData();
      // Prepares the file for the API call
      formattedData.append("file", file);
      const {data:res} = await axios.post("http://localhost:5000/api/storage/upload", formattedData)
      console.log(res);
      setFile(res);
      formData.append("cv",res); 

      const json = {
        Status: "Pending",
        EmpName: name,
        email: email,
        AppId: formId,
        cv: res,
        skills: skills,
      };


      console.log(json);
      const { data } = await axios.post(`http://localhost:5000/api/empapp`, json);
      console.log(data);
    } catch (error) {
      console.error("There was an error submitting the application!", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCheckboxChange = (e, setter, stateArray) => {
    const value = e.target.value;
    if (e.target.checked) {
      setter([...stateArray, value]);
    } else {
      setter(stateArray.filter(item => item !== value));
    }
  };

  if (!job) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="FormBorder m-1 p-1">
      <Form onSubmit={handleSubmit} className="border rounded p-4">
      <h1 className="sl">Apply for {job.title}</h1>
      <h1>Description:</h1>
      <h6>{job.description}</h6>
        <Form.Group className="mb-3 ">
          <Form.Label><h3>Skills:</h3></Form.Label>
          <Row className="skillrow p-3">
            {job.skills.map((skill, index) => (
              <Col key={`skill-${index}`}>
                <li>
                  <h6>{skill}</h6>
                  <Form.Check 
                    type="checkbox" 
                    value={skill} 
                    onChange={(e) =>{
                      const value = e.target.value;
                      if (e.target.checked) {
                        setSkills([...skills, value]);
                      } else {
                        setSkills(skills.filter(item => item !== value));
                      }
                    }}
                  />
                </li>
              </Col>
            ))}
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label><h3>Requirements:</h3></Form.Label>
          <Row className="skillrow p-3">
            {job.requirements.map((requirement, index) => (
              <Col key={`requirement-${index}`}>
                <li>
                  <h6>{requirement}</h6>
                  <Form.Check 
                    type="checkbox" 
                    value={requirement} 
                    onChange={(e) =>{
                      const value = e.target.value;
                      if (e.target.checked) {
                        setRequirements([...requirements, value]);
                      } else {
                        setRequirements(requirements.filter(item => item !== value));
                      }
                    }}
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
            onChange={(e) =>setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h3>Email address:</h3></Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicResume">
          <Form.Label><h3>Please upload your CV:</h3></Form.Label>
          <Form.Control className="file" type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ApplyForm;
