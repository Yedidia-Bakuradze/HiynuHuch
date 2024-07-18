import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ListOfEmployees } from "../Data/ListOfEmployees.js";
import "../Style/Moredetails.css";

function Moredetails() {
  const { id } = useParams();
  const emp = ListOfEmployees.find((emp) => id === emp._id.$oid);
  const [comments, setComments] = useState([{ description: "" }]);
  const navigate = useNavigate();
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
  const handleSubmit = (e) => {
    e.preventDefault();

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
      <div>
        No data was found
      </div>
    );
  }

  return (
    <><Row>
      <div>
        <div className="border rounded p-2 m-2" gap={3}>
          <div className="p-2 ">Name: {emp.name}</div>
          <div className="p-2 ">Email: {emp.email}</div>

          <Form.Label><h5>Skills:</h5></Form.Label>
          <h6>
            {job.skills.map((skill, index) => (

              <text key={`skill-${index}`}>{skill}, </text>
            ))}
          </h6>
          <Link to={`https://github.com/${emp.github}`} className="remove_text_dec">
              <h6 className="nav_container" >
                Github
              </h6>
          </Link>
          <Link to={`https://linkedin.com/${emp.linkedin}`} className="remove_text_dec">
              <h6 className="nav_container" >
              linkedin
              </h6>
          </Link>
        </div>
        <div id="comments">
          <Form onSubmit={handleSubmit} className="border rounded p-2">
            {comments.map((comment, index) => (
              <div key={index} className="comment-row">
                <Form.Label className="">
                  Comment:
                </Form.Label>
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
                <button type="submit" className="app_container ratingbuttons">
                  Update
                </button>
                <button
                  type="button"
                  className={`app_container ratingbuttons ${comments.length >= 5 ? "disabled-button" : ""}`}
                  onClick={addCommentForm}
                  disabled={comments.length >= 5}
                >
                  Add Comment
                </button>
                <button
                  type="button"
                  className="app_container ratingbuttons"
                  onClick={() => {
                    navigate("/");
                  } }
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Row><img src={".../public/logo512.png"}/></>
  );
}

export default Moredetails;
