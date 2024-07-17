import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ListOfEmployees } from "../Data/ListOfEmployees.js";
import "../Style/Moredetails.css";

function Moredetails() {
  const { id } = useParams();
  const emp = ListOfEmployees.find((emp) => id === emp._id.$oid);
  const [comments, setComments] = useState([{ description: "" }]);
  const navigate = useNavigate();

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

  return (
    <>
      <div className="rating">
        <Form className="Personborder-form">
          <div>
            <Form.Label className="Personfieldsnames rating">Name:</Form.Label>
            <Form.Control
              readOnly
              as="input"
              className="Personfields"
              name="description"
              value={emp.name}
            />
          </div>
        </Form>
      </div>
      <div className="rating">
        <Form className="Personborder-form">
          <div>
            <Form.Label className="Personfieldsnames rating">
              {emp.name}
            </Form.Label>
            <Form.Control
              readOnly
              as="input"
              className="Personfields"
              name="description"
              value={emp.email}
            />
          </div>
        </Form>
      </div>
      <div className="rating">
        <Form className="Personborder-form">
          <div>
            <Form.Label className="Personfieldsnames rating">
              {emp.name}
            </Form.Label>
            <Form.Control
              readOnly
              as="input"
              className="Personfields"
              name="description"
              value={emp.createdAt.$date}
            />
          </div>
        </Form>
      </div>
      <div className="rating">
        <Form onSubmit={handleSubmit} className="Personborder-form">
          {comments.map((comment, index) => (
            <div key={index} className="comment-row">
              <Form.Label className="Personfieldsnames rating">
                Comment:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="Personfields rating"
                placeholder="good worker, need to keep an eye out on that one"
                name="description"
                value={comment.description}
                onChange={(e) => handleCommentChange(index, e.target.value)}
              />
            </div>
          ))}

          <div id="ratingbuttons">
            <button type="submit" className="app_container ratingbuttons">
              Update
            </button>
            <button
              type="button"
              className={`app_container ratingbuttons ${
                comments.length >= 5 ? "disabled-button" : ""
              }`}
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
              }}
            >
              Cancel
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Moredetails;
