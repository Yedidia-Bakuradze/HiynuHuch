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
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const cachedPosition = getCachedPosition(id);
    setPosition(cachedPosition);
  }, [id]);

  useEffect(() => {
    if (position) {
      setTitle(position.title || "");
      setTags(position.tags.join(", ") || "");
      setDescription(position.description || "");
    }
  }, [position]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!position) {
    return <div>Loading...</div>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Job title:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Intern etc"
        size="lg"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Form.Label>Tags:</Form.Label>
      <Form.Control
        type="text"
        placeholder="Full time/ Half time etc"
        name="tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <Form.Label>Description:</Form.Label>
      <Form.Control
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
  );
}
