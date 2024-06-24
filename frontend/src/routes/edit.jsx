import { useLoaderData, redirect, useNavigate } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';
import { updateContact } from "../contacts";
import "./edit.css"
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();
  return (
    <Form onSubmit="post">
      <Form.Label>Job title:</Form.Label> 
          <Form.Control type="text" 
                        placeholder="Intern etc" 
                        size="lg"
                        name="first"
                        defaultValue={contact?.first}
                        /> 
        
        <Form.Label>Job precent:</Form.Label> 
        <Form.Control type="text" 
                        placeholder="Full time/ Half time etc" name="last"
                        defaultValue={contact?.last} /> 
        
        <Form.Label>Hybrid/Frontal:</Form.Label> 
        <Form.Control type="text" placeholder="3 days at work 2 at home etc" name="twitter"
                  defaultValue={contact?.twitter} /> 

        <Form.Label>Job requirment:</Form.Label> 
        <Form.Control type="text" name="notes"placeholder="at least 2 years of experience, a degree, worked as an intern for a year in other tech companies etc"
                  defaultValue={contact?.notes} /> 
      <p>
        <button type="submit" className="app_container">Update</button>
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
