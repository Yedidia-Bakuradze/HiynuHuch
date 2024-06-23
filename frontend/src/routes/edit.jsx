import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contacts";

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
    <Form method="post" id="contact-form">
      <p>
        <span>Job title</span>
        <input
        className="app_container"
          placeholder="Intern etc"
          aria-label="Job title"
          type="text"
          defaultValue={contact?.first}
        />
      </p>
      <label>
        <span>Job precent</span>
        <input
        className="app_container"
          type="text"
          name="precent"
          placeholder="Full time/ Half time etc"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Hybrid/Frontal</span>
        <input
        className="app_container"
          placeholder="3 days at work 2 at home etc"
          aria-label="Job location+times"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Job requirment</span>
        <textarea 
        className="app_container"
        placeholder="at least 2 years of experience, a degree worked as an intern for a year in other tech companies etc"
        name="notes"
        defaultValue={contact?.notes}
        rows={6}/>
      </label>
      <p>
        <button type="submit" className="app_container">Save</button>
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
