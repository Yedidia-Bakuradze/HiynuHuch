import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { emps } from "../data/emps.js";
import "../css/Moredetails.css";

function Moredetails() {
  const { id } = useParams();
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
    <div className="rating">
      <Form onSubmit={handleSubmit} className="border-form">
        {comments.map((comment, index) => (
          <div key={index} className="comment-row">
            <Form.Label className="fieldsnames rating">Comment:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="fields rating"
              placeholder="3 days at work 2 at home etc"
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
  );
}

export default Moredetails;
