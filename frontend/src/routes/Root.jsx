import "./Root.css";
import { useEffect } from "react";
import {
  Outlet,
  Link,
  NavLink,
  useLoaderData,
  redirect,
  useNavigation,
} from "react-router-dom";
import {Form, Button} from 'react-bootstrap'; 
import { getContacts, createContact } from "../contacts";
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}
export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);
  return (
    <>
      <div id="sidebar">
        <div>
          <ul >
          <Link to={`/Applications`} className="remove_text_dec">
              <li className="nav_container" id="settings">
                Applications
              </li>
          </Link>
          <Form method="post" id="top_nav_buttons">
            <button type="submit" className="nav_container" id="new_button">New</button>
          </Form>

          <Form id="search-form " role="search"  >
            <input
              className="app_container"
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          
          </ul>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    id="navLink"
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
        <div>
          <ul>
            <Link to={`/settings`} className="remove_text_dec">
              <li className="nav_container" id="settings">
                Settings
              </li>
            </Link>
            <Link to={`/profile`} className="remove_text_dec">
              <li className="nav_container" id="profile">
                Profile
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
