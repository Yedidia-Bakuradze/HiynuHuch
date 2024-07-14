import { Form, redirect } from "react-router-dom";

export async function action({ params }) {
  return redirect("/");
}
export default function Destroy() {
  return <p>hi</p>;
}
