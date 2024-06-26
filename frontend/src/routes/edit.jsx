import { redirect, useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./edit.css";
import { positions } from "../data/positions.js";

export default function Editposition() {
  const { id } = useParams();
  const position = positions.find((position) => id === position._id.$oid);
  const navigate = useNavigate();
  return (
    <Form onSubmit="post">
      <Form.Label>Job title:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Intern etc"
        size="lg"
        name="title"
        defaultValue={position?.first}
      />

      <Form.Label>Tags:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Full time/ Half time etc"
        name="tags"
        defaultValue={position?.last}
      />

      <Form.Label>Description:</Form.Label>
      <Form.Control
        type="text"
        placeholder="3 days at work 2 at home etc"
        name="description"
        defaultValue={position?.twitter}
      />

      <p>
        <button type="submit" className="app_container">
          Update
        </button>
        <button
          type="button"
          className="app_container"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
