import { Form, redirect, useLoaderData } from "react-router-dom";
import { getform, updateForm } from "../forum";
export async function loader({ params, request }) {
  const formData = await request.formData();
  const form_m = await getform(params.notes);
  const updates = Object.fromEntries(formData);
  await updateForm(params.notes, updates);
  return { form_m };
}

export async function action({ params }) {
  return redirect("/");
}
export default function Destroy() {
  const { form_m } = useLoaderData();
  return (
    <Form method="post" id="notes-form">
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={form_m?.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}
