import {useNavigate } from "react-router-dom";
import { useState} from "react";
import { Form } from "react-bootstrap";
import "../Style/edit.css";
import "../Style/login.css";

export default function Newposition() {
  const [position, setPosition] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    skills: "",
    requirments: "",
    description: "",
    times: "",
    NiceAdditions:"",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="job-div">
      <Form onSubmit={handleSubmit} className="border rounded p-4 newForm ">
        <Form.Label className="fieldsnames">Job title:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="Intern etc"
          size="lg"
          name="title"
          value={formData.title}
        />

        <Form.Label className="fieldsnames">skiils:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="c++, python, react (all different skills needs a comma)"
          name="skills"
          value={formData.skills}
        />

        <Form.Label className="fieldsnames">requirments:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="deggre, 2 years experience (all different requirments needs a comma)"
          name="requirments"
          value={formData.requirments}
        />
        <Form.Label className="fieldsnames">frontaly/hybrid:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="3 days at work 2 at home etc"
          name="times"
          value={formData.times}
        />
        <Form.Label className="fieldsnames">Description:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="3 days at work 2 at home etc"
          name="description"
          value={formData.description}
        />
        <Form.Label className="fieldsnames">Nice to have:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="3 days at work 2 at home etc"
          name="NiceAdditions"
          value={formData.NiceAdditions}
        />

        <div className="p-2" id="Newbuttons">
          
          <button
            type="button"
            className="app_container"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
          <button type="submit" className="app_container">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}
