import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


function ApplyForm() {
  const { formId } = useParams();
  
  const [skills,setSkills] =  useState([]);
  const [requirements,setRequirements] =  useState([]);
  const [name,setName] =  useState([]);
  const [email,setEmail] =  useState([]);
  const [job,setJob] = useState(null);
 
  //Fetching the job data form the backend
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

    if(!skills || !requirements || !name || !email){
      alert("Please fill in all the fields");
      return;
    }
    const applicationData = {
      Status: "Padding",
      AppId: formId,
      EmpName: name,
      email:email,
      cv: "URL",
      skills: skills,
    }
    const {data} = await axios.post(`http://localhost:5000/api/empApp`, applicationData)
    console.log(data);
  };

  const handleCheckboxChange = (e, setter, stateArray) => {
    const value = e.target.value;
    if (e.target.checked) {
      setter([...stateArray, value]);
    } else {
      setter(stateArray.filter(item => item !== value));
    }
  };

  //Slow loading time - show loading message
  if(!job){
    return <h1>Loading...</h1>
  }

  return (
    <div className="FormBorder">
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
                    onChange={(e) =>{
                      const value = e.target.value;
                      if (e.target.checked) {

                        const a = [...skills];
                        setSkills([...a, value]);
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
          <Row className="skillrow">
            {job.tags.map((requirement, index) => (
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










 // const job ={
  //   id: 1,
  //   title: "Full Stack Developer",
  //   description:
  //     "We are looking for a skilled Full Stack Developer to join our dynamic team.",
  //   requirements: [
  //     "Bachelor's degree in Computer Science or related field",
  //     "3+ years of experience in software development",
  //     "Proficient in JavaScript, HTML, CSS",
  //     "Experience with React and Node.js",
  //     "Strong problem-solving skills",
  //   ],
  //   skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Git"],
  //   workType: "hybrid", // Possible values: 'remote', 'hybrid', 'onsite'
  //   level: "Mid-level", // Possible values: 'Entry-level', 'Mid-level', 'Senior-level'
  //   niceToHave: [
  //     "Experience with Docker",
  //     "Knowledge of CI/CD pipelines",
  //     "Familiarity with cloud platforms (AWS, Azure, GCP)",
  //   ],
  // }