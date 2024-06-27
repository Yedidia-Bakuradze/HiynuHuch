import { Form, redirect, useLoaderData } from "react-router-dom";

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
