import {useNavigate } from "react-router-dom";
import { useState} from "react";
import { Form } from "react-bootstrap";
import "../Style/edit.css";
import "../Style/login.css";

export default function Newposition() {
  const [position, setPosition] = useState(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="job-div">
      <Form onSubmit={handleSubmit} className="border-form ">
        <Form.Label className="fieldsnames">Job title:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="Intern etc"
          size="lg"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Form.Label className="fieldsnames">Tags:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="Full time/ Half time etc"
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <Form.Label className="fieldsnames">Description:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="3 days at work 2 at home etc"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <p>
          <button type="submit" className="app_container">
            Update
          </button>
          <button
            type="button"
            className="app_container"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </p>
      </Form>
    </div>
  );
}
