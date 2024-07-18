import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../Data/CV.png";
import "../Style/MoreDetails.css";

function MoreDetails() {
  const [emp, setEmp] = useState(null);
  const { employeeId } = useParams();

  const fetchEmployeeData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/empapp/${employeeId}`);
      setEmp(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, [employeeId]);

  const [comments, setComments] = useState([{ description: "" }]);
  const [Personality, setPersonality] = useState();
  const [Location, setLocation] = useState();
  const [General, setGeneral] = useState();
  const [Professionalism, setProfessionalism] = useState();

  const navigate = useNavigate();
  const job = {
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Git"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const addCommentForm = () => {
    if (comments.length < 5) {
      setComments([...comments, { description: "" }]);
    }
  };

  const handleCommentChange = (index, value) => {
    const newComments = comments.map((comment, i) =>
      i === index ? { ...comment, description: value } : comment
    );
    setComments(newComments);
  };

  if (!emp) {
    return (
      <div>No data was found</div>
    );
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="border rounded p-2 m-2 borderss">
            <div className="p-2">Name: {emp.name}</div>
            <div className="p-2">Email: {emp.email}</div>

            <Form.Label><h5>Skills:</h5></Form.Label>
            <h6>
              {job.skills.map((skill, index) => (
                <span key={`skill-${index}`}>{skill}, </span>
              ))}
            </h6>
            <Link to={`https://github.com/${emp.github}`} className="remove_text_dec">
              <h6 className="nav_container">Github</h6>
            </Link>
            <Link to={`https://linkedin.com/${emp.linkedin}`} className="remove_text_dec">
              <h6 className="nav_container">LinkedIn</h6>
            </Link>
            <div id="Scale">
              <Form.Label>Location:</Form.Label>
              <Form.Range value={Location} onChange={(e) => setLocation(e.target.value)} />
              <Form.Label>Personality:</Form.Label>
              <Form.Range value={Personality} onChange={(e) => setPersonality(e.target.value)} />
              <Form.Label>General:</Form.Label>
              <Form.Range value={General} onChange={(e) => setGeneral(e.target.value)} />
              <Form.Label>Professionalism:</Form.Label>
              <Form.Range value={Professionalism} onChange={(e) => setProfessionalism(e.target.value)} />
            </div>
          </div>
          <div id="comments">
            <Form onSubmit={handleSubmit} className="border rounded p-2">
              {comments.map((comment, index) => (
                <div key={index} className="comment-row">
                  <Form.Label>Comment:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="Personfields rating"
                    placeholder="good worker, need to keep an eye out on that one"
                    name="description"
                    value={comment.description}
                    onChange={(e) => handleCommentChange(index, e.target.value)} />
                </div>
              ))}
              <div comments>
                <div id="ratingbuttons">
                  <Button type="submit" className="app_container ratingbuttons">Update</Button>
                  <Button
                    type="button"
                    className={`app_container ratingbuttons ${comments.length >= 5 ? "disabled-button" : ""}`}
                    onClick={addCommentForm}
                    disabled={comments.length >= 5}
                  >
                    Add Comment
                  </Button>
                  <Button
                    type="button"
                    className="app_container ratingbuttons"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <img src={logo} alt="Logo" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default MoreDetails;
