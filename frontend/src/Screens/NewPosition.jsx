import {useNavigate } from "react-router-dom";
import { forwardRef, useState} from "react";
import { Form } from "react-bootstrap";
import "../Style/edit.css";
import "../Style/login.css";
import { ListOfPositions } from "../Data/ListOfPositions";

export default function NewPosition() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    skills: "",
    requirements: "",
    typeOfPosition:"",
    description: "",
    niceToHave:"",
  });


  const newPositionHandler = (e) => {
    if(forwardRef.title === "" || formData.skills === "" || formData.requirements === "" || formData.typeOfPosition === "" || formData.description === "" || formData.niceToHave === ""){
      alert("Please fill all the fields");
      return;
    }
  
    const arrayOfSkills = formData.skills.split(",");
    alert(arrayOfSkills);
    const newPosition = {
      id: ListOfPositions.length + 1,
      title: formData.title,
      skills: formData.skills.split(","),
      requirements: formData.requirements.split(","),
      typeOfPosition: formData.typeOfPosition,
      description: formData.description,
      niceToHave: formData.niceToHave.split(","),
    };
    //TODO: send the new position to the server
    ListOfPositions.push(newPosition);
    //TODO: Navigate to the position page
    navigate(`/position/${newPosition.id}`);
  }


  return (
    <div className="job-div">
      <Form onSubmit={newPositionHandler} className="border rounded p-4 newForm ">
        
        <Form.Label className="fieldsnames">Job title:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="Intern etc"
          size="lg"
          name="title"
          value={formData.title}
          onChange={(e)=>setFormData({...formData, title: e.target.value})}
        />

        <Form.Label className="fieldsnames">skiils:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="c++, python, react (all different skills needs a comma)"
          name="skills"
          value={formData.skills}
          onChange={(e)=>setFormData({...formData, skills: e.target.value})}

        />

        <Form.Label className="fieldsnames">requirements:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="deggre, 2 years experience (all different requirements needs a comma)"
          name="requirments"
          value={formData.requirements}
          onChange={(e)=>setFormData({...formData, requirements: e.target.value})}
        />
        
        <Form.Label className="fieldsnames">frontaly/hybrid:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="3 days at work 2 at home etc"
          name="times"
          value={formData.times}
          onChange={(e)=>setFormData({...formData, typeOfPosition: e.target.value})}
        />
        
        <Form.Label className="fieldsnames">Description:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="3 days at work 2 at home etc"
          name="description"
          value={formData.description}
          onChange={(e)=>setFormData({...formData, description: e.target.value})}
        />

        <Form.Label className="fieldsnames">Nice to have:</Form.Label>
        <Form.Control
          className="fields"
          type="text"
          placeholder="3 days at work 2 at home etc"
          name="NiceAdditions"
          value={formData.NiceAdditions}
          onChange={(e)=>setFormData({...formData, niceToHave: e.target.value})}
        />

        <div className="p-2" id="new-position-btn">
          <button type="button" className="app_container" onClick={() => {navigate("/");}}> Cancel </button>
          <button type="submit" className="app_container"> Submit </button>
        </div>

      </Form>

    </div>

  );

  
}
