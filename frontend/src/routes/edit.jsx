import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./edit.css";
import { getCachedPosition } from "../components/cache";

const cache = {};
export async function action(redirect, params) {
  console.log(params.target.title.value);
  console.log("Hello, World!");
  return redirect(`/contacts/${params.contactId}`);
}

export default function Editposition() {
  const { id } = useParams();
  const [position, setPosition] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cachedPosition = getCachedPosition(id);
    setPosition(cachedPosition);
  }, [id]);

  useEffect(() => {
    if (position) {
      document.getElementsByName("title")[0].value = position.title || "";
      document.getElementsByName("tags")[0].value =
        position.tags.join(", ") || "";
      document.getElementsByName("description")[0].value =
        position.description || "";
    }
  }, [position]);

  if (!position) {
    return <div>Loading...</div>;
  }

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Label>Job title:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Intern etc"
        size="lg"
        name="title"
      />

      <Form.Label>Tags:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Full time/ Half time etc"
        name="tags"
      />

      <Form.Label>Description:</Form.Label>
      <Form.Control
        type="text"
        placeholder="3 days at work 2 at home etc"
        name="description"
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
  );
}
